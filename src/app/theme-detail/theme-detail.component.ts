import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ThemeService } from '../theme/theme.service';
import { Theme } from '../sidebar/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.loadTheme();
        this.createForm();
    }

    private loadTheme() {
        this.activatedRoute.params.subscribe(params => {
            const slug = params.slug;
            this.theme = this.themeService.getBySlug(slug);
            if (!this.theme) {
                this.router.navigate(['']);
            }
        });
    }

    private createForm() {
        this.themeDetailForm = this.formBuilder.group({
            grade: [1, [
                Validators.required,
                Validators.min(0),
                Validators.max(10)
            ]]
        });
    }
}
