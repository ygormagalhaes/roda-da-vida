import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component';
import { ThemeFormComponent } from './theme-form/theme-form.component';
import { ValidationMessageModule } from '../shared/validation-message/validation-message.module';

@NgModule({
    declarations: [
        SidebarComponent,
        ThemeFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationMessageModule
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }
