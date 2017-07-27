import {Component, Input} from "@angular/core";
import {ILocation, IUser} from "../../../interfaces/app.interface";
import {NgxAni} from "ngxani";

@Component({
    selector: 'feed-item',
    templateUrl: 'feed-item.template.html'
})
export class FeedItemComponent {
    @Input() header: string;
    @Input() type: string;
    @Input() imageUrl: string;
    @Input() userList: IUser[];
    @Input() location: Location;

    constructor(private ngxAni: NgxAni) {

    }
}