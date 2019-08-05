import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Theme } from './theme';
import { ThemeService } from '../theme/theme.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    themes$: Observable<Theme[]>;
    titleForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private themeService: ThemeService,
    ) { }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: ['', [
                Validators.required,
                Validators.maxLength(20)
            ]]
        });
        this.themes$ = this.themeService.getThemes();
    }

    addSubject(): void {
        const title = this.titleForm.get('title').value;
        this.themeService.add(new Theme(title));
        this.titleForm.reset();
    }
}
