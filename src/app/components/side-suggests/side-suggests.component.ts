import {Component, OnInit} from '@angular/core';
import {CacheService} from '../../services/cache.service';

@Component({
    selector: 'side-suggests',
    templateUrl: 'side-suggests.template.html'
})
export class SideSuggestsComponent implements OnInit {
    pushpinSetting: any;

    constructor(cacheService: CacheService) {

    }

    ngOnInit(): void {
        this.pushpinSetting = {offset: 45};
    }
}
