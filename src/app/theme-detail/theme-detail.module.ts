import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeDetailComponent } from './theme-detail.component';
import { ValidationMessageModule } from '../shared/validation-message/validation-message.module';

@NgModule({
    declarations: [
        ThemeDetailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationMessageModule
    ]
})
export class ThemeDetailModule { }
