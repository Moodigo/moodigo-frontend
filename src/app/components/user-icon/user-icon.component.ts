import {Component, Input} from "@angular/core";

@Component({
    selector: 'user-icon',
    templateUrl: 'user-icon.template.html'
})

export class UserIconComponent {
    @Input() imageUrl: string;
    @Input() className: string;
}
