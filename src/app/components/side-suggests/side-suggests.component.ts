import {Component} from "@angular/core";
import {CacheService} from "../../services/cache.service";

@Component({
    selector: 'side-suggests',
    templateUrl: 'side-suggests.template.html'
})
export class SideSuggestsComponent {
    constructor(cacheService: CacheService) {

    }
}