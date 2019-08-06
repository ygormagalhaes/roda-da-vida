import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Theme } from '../theme';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
    selector: 'app-theme-list',
    templateUrl: './theme-list.component.html'
})
export class ThemeListComponent implements OnInit {
    themes$: Observable<Theme[]>;

    constructor(
        private themeService: ThemeService,
    ) { }

    ngOnInit() {
        this.themes$ = this.themeService.getThemes();
    }
}
