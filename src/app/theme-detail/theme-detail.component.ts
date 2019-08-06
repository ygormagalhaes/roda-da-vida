import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ThemeService } from '../theme/theme.service';
import { Theme } from '../sidebar/theme';
import { AlertService } from '../shared/alert/alert.service';

@Component({
    templateUrl: './theme-detail.component.html'
})
export class ThemeDetailComponent implements OnInit {
    theme: Theme;
    themeDetailForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private themeService: ThemeService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.loadTheme();
    }

    private loadTheme() {
        this.activatedRoute.params.subscribe(params => {
            const slug = params.slug;
            this.theme = this.themeService.getBySlug(slug);
            if (!this.theme) {
                this.router.navigate(['']);
            } else {
                this.createForm();
            }
        });
    }

    private createForm() {
        this.themeDetailForm = this.formBuilder.group({
            slug: [this.theme.slug],
            title: [this.theme.title],
            grade: [
                this.theme.grade ? this.theme.grade : 1,
                [
                    Validators.required,
                    Validators.min(0),
                    Validators.max(10)
                ]
            ],
            action: this.formBuilder.group({
                past: [
                    this.getActionContent('past'),
                    [
                        Validators.required,
                        Validators.minLength(16),
                        Validators.maxLength(255)
                    ]
                ],
                present: [
                    this.getActionContent('present'),
                    [
                        Validators.required,
                        Validators.minLength(16),
                        Validators.maxLength(255)
                    ]
                ],
                future: [
                    this.getActionContent('future'),
                    [
                        Validators.required,
                        Validators.minLength(16),
                        Validators.maxLength(255)
                    ]
                ]
            })
        });
    }

    private getActionContent(field: string): string {
        return this.theme.action && this.theme.action[field]
            ? this.theme.action[field]
            : '';
    }

    update(): void {
        const theme = this.themeDetailForm.getRawValue();
        this.themeService.update(theme);
        this.alertService.setAlert('Tema atualizado!');
    }
}
