import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeDetailComponent } from './theme-detail.component';

@NgModule({
    declarations: [
        ThemeDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ThemeDetailModule { }
