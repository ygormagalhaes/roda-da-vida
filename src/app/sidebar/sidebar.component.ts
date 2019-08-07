import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isDashboardAvailable = false;
    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.themeService.getThemes().subscribe(themes => {
            this.isDashboardAvailable = !themes.some(theme => theme.status === false);
        });
    }
}
