import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CacheService} from "./services/cache.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    constructor(private cacheService: CacheService,
                translateService: TranslateService) {
        translateService.use('cz');
    }

    ngOnInit(): void {
        this.cacheService.cacheFeed();
    }
}
