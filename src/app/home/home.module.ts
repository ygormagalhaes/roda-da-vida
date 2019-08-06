import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomeRoutingModule } from './home.routing';
import { ThemeDetailModule } from '../theme-detail/theme-detail.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        SidebarModule,
        HomeRoutingModule,
        ThemeDetailModule
    ]
})
export class HomeModule { }
