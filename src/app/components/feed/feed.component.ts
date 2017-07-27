import {Component, OnInit} from "@angular/core";
import {CacheService} from "../../services/cache.service";
import {FeedItem} from "../../dao/feed-item.dao";

@Component({
    selector: 'feed',
    templateUrl: 'feed.template.html',
    host: {
        "[attr.fxFlex]": "100",
        "[attr.fxLayout]": "column",
    },
})

export class FeedComponent implements OnInit {
    public feedItemList: FeedItem[];

    constructor(private cacheService: CacheService) {

    }

    ngOnInit() {
        this.cacheService.feed.subscribe((feed: FeedItem[]) => {
            this.feedItemList = feed;
        })
    }
}