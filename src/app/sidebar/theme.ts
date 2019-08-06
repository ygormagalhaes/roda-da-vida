import { Action } from './action';

export class Theme {
    slug: string;
    grade: number;
    action: Action;
    constructor(public title: string) {
        this.slugify();
    }

    private slugify(): void {
        this.slug = this.title.toLowerCase().trim().split(' ').join('-');
    }
}
