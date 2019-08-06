import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ThemeService } from '../theme/theme.service';
import { Theme } from '../sidebar/theme';

@Component({
    templateUrl: './theme-detail.component.html'
})
export class ThemeDetailComponent implements OnInit {
    theme: Theme;

    constructor(
        private activatedRoute: ActivatedRoute,
        private themeService: ThemeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            const slug = params.slug;
            this.theme = this.themeService.getBySlug(slug);
            if (!this.theme) {
                this.router.navigate(['']);
            }
        });
    }
}
