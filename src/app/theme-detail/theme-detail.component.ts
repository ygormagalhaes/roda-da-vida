import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThemeService } from '../theme/theme.service';
import { Theme } from '../sidebar/theme';

@Component({
    templateUrl: './theme-detail.component.html'
})
export class ThemeDetailComponent implements OnInit {
    theme: Theme;

    constructor(
        private activatedRoute: ActivatedRoute,
        private themeService: ThemeService
    ) { }

    ngOnInit() {
        const slug = this.activatedRoute.snapshot.params.slug;
        this.theme = this.themeService.getBySlug(slug);
    }
}
