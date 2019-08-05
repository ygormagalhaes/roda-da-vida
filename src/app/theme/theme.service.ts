import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { Theme } from '../sidebar/theme';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themes: Theme[] = [];
    private themeSubject = new Subject<Theme[]>();

    add(theme: Theme): void {
        this.themes.push(theme);
        this.themeSubject.next(this.themes);
    }

    getBySlug(slug: string): Theme {
        return this.themes.find(theme => theme.slug === slug);
    }

    getThemes() {
        return this.themeSubject.asObservable();
    }
}
