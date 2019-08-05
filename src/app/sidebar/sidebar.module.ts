import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }
