import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ThemeService } from 'src/app/theme/theme.service';
import { Theme } from '../theme';
import { Router } from '@angular/router';

@Component({
    selector: 'app-theme-form',
    templateUrl: './new-theme-form.component.html'
})
export class NewThemeFormComponent implements OnInit {
    newThemeForm: FormGroup;

    @ViewChild('inputThemeTitle', { static: true })
    inputThemeTitle: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private themeService: ThemeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.newThemeForm = this.formBuilder.group({
            title: ['', [
                Validators.required,
                Validators.maxLength(20)
            ]]
        });
        this.inputThemeTitle.nativeElement.focus();
    }

    addTheme(): void {
        const title = this.newThemeForm.get('title').value;
        const newTheme = new Theme(title);
        this.themeService.add(newTheme);
        this.newThemeForm.reset();
        this.router.navigate(['themes', newTheme.slug]);
    }
}
