import { Action } from './action';

export class Theme {
    slug: string;
    actions: Action;
    constructor(public title: string) {
        this.slugify();
    }

    private slugify(): void {
        this.slug = this.title.toLowerCase().trim().split(' ').join('-');
    }
}
