import {Component} from "@angular/core";
import {CacheService} from "../../services/cache.service";

@Component({
    selector: 'side-filter',
    templateUrl: 'side-filter.template.html'
})
export class SideFilterComponent {
    constructor(cacheService: CacheService) {

    }
}