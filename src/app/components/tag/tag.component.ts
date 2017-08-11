import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'tag',
    templateUrl: 'tag.template.html'
})
export class TagComponent {
    @Input() name: string;
    active: boolean;

    constructor() {
        this.active = false;
    }

    onClick() {
        this.active = !this.active;
    }
}
