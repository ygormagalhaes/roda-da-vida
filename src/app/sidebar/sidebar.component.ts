import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Theme } from './theme';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    titleForm: FormGroup;
    themes: Theme[] = [];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: ['', [
                Validators.required,
                Validators.maxLength(20)
            ]]
        });
    }

    addSubject(): void {
        const title = this.titleForm.get('title').value;
        this.themes.push(new Theme(title));
        this.titleForm.reset();
    }
}
