import { Component } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html'
})
export class MenuListComponent {
    constructor(private dashboardService: DashboardService) { }

    isDashboardAvailable(): boolean {
        return this.dashboardService.isDashboardAvailable;
    }
}
