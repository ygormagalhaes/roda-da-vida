import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { Theme } from '../sidebar/theme';
import { themeDatasource } from './theme.datasource';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themes: Theme[] = [];
    private themeSubject = new Subject<Theme[]>();

    constructor() {
        this.themes = themeDatasource;
    }

    add(theme: Theme): void {
        this.themes.push(theme);
        this.themeSubject.next(this.themes);
    }

    getBySlug(slug: string): Theme {
        return this.themes.find(theme => theme.slug === slug);
    }

    getThemes() {
        return this.themeSubject.asObservable().pipe(startWith(this.themes));
    }

    update(theme: Theme): void {
        const index = this.themes.findIndex(currentTheme => currentTheme.slug === theme.slug);
        if (index > -1) {
            theme.status = true;
            this.themes[index] = theme;
            this.themeSubject.next(this.themes);
        }
    }
}
