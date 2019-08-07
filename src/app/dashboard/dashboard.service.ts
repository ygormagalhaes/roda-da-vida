import { Injectable } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private _isDashboardAvailable = false;

    constructor(themeService: ThemeService) {
        themeService.getThemes().subscribe(themes => {
            this._isDashboardAvailable = !themes.some(theme => theme.status === false);
        });
    }

    get isDashboardAvailable(): boolean {
        return this._isDashboardAvailable;
    }
}
