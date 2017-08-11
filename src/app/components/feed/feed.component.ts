import {Component, OnInit} from '@angular/core';
import {CacheService} from '../../services/cache.service';
import {FeedItem} from '../../entity/feed-item';
import {AuthService} from '../../services/auth.service';
import {FilterService} from '../../services/entity-services/filter.service';

@Component({
    selector: 'feed',
    templateUrl: 'feed.template.html',
    host: {
        '[attr.fxFlex]': '100',
        '[attr.fxLayout]': 'column',
    },
})

export class FeedComponent implements OnInit {
    public feedItemList: FeedItem[];

    constructor(private cacheService: CacheService,
                private authService: AuthService,
                private filterService: FilterService) {

    }

    ngOnInit() {
        this.cacheService.feed.subscribe((feed: FeedItem[]) => {
            this.feedItemList = feed;
        });

        this.authService.isLoggedIn.subscribe((response: boolean) => {

            if (response) {
                this.cacheService.cacheFeed();
                this.filterService.cacheFilterTags();
            }
        });
    }
}
