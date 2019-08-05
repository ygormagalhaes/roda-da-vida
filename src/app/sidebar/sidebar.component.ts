import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    subjectForm: FormGroup;
    subjects: string[] = [
        'Intelecto',
        'Lazer',
        'Vida Financeira'
    ];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.subjectForm = this.formBuilder.group({
            subject: ['', [
                Validators.required,
                Validators.maxLength(20)
            ]]
        });
    }

    addSubject(): void {
        const subject = this.subjectForm.get('subject').value;
        this.subjects.push(subject);
        this.subjectForm.reset();
    }
}
