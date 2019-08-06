import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Theme } from '../theme';
import { ThemeService } from 'src/app/theme/theme.service';
import { map } from 'rxjs/operators';

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
        this.themes$ = this.themeService.getThemes().pipe(map(themes => themes.sort((a, b) => {
            if (a.slug > b.slug) {
                return 1;
            } else if (a.slug < b.slug) {
                return -1;
            }
            return 0;
        })));
    }
}
