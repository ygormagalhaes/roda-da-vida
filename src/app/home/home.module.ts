import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomeRoutingModule } from './home.routing';
import { ThemeDetailModule } from '../theme-detail/theme-detail.module';
import { AlertModule } from '../shared/alert/alert.module';
import { IntroComponent } from './intro/intro.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        HomeComponent,
        IntroComponent
    ],
    imports: [
        CommonModule,
        SidebarModule,
        HomeRoutingModule,
        ThemeDetailModule,
        AlertModule,
        CoreModule
    ]
})
export class HomeModule { }
