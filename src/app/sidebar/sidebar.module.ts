import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component';
import { NewThemeFormComponent } from './new-theme-form/new-theme-form.component';
import { ValidationMessageModule } from '../shared/validation-message/validation-message.module';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
    declarations: [
        SidebarComponent,
        NewThemeFormComponent,
        ThemeListComponent,
        MenuListComponent
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
