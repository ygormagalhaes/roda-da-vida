import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ThemeService } from 'src/app/theme/theme.service';
import { Theme } from '../theme';

@Component({
    selector: 'app-theme-form',
    templateUrl: './theme-form.component.html'
})
export class ThemeFormComponent implements OnInit {
    themeForm: FormGroup;

    @ViewChild('inputThemeTitle', { static: true })
    inputThemeTitle: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private themeService: ThemeService,
    ) { }

    ngOnInit() {
        this.themeForm = this.formBuilder.group({
            title: ['', [
                Validators.required,
                Validators.maxLength(20)
            ]]
        });
        this.inputThemeTitle.nativeElement.focus();
    }

    addSubject(): void {
        const title = this.themeForm.get('title').value;
        this.themeService.add(new Theme(title));
        this.themeForm.reset();
    }
}
