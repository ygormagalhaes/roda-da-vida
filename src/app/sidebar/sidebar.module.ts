import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }
