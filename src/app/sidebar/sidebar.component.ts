import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Theme } from './theme';
import { Observable } from 'rxjs';

import { ThemeService } from '../theme/theme.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    themes$: Observable<Theme[]>;

    constructor(
        private themeService: ThemeService,
    ) { }

    ngOnInit() {
        this.themes$ = this.themeService.getThemes();
    }
}
