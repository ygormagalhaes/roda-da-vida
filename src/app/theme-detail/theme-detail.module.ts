import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeDetailComponent } from './theme-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ThemeDetailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class ThemeDetailModule { }
