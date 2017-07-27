import {DataService} from "./data.service";
import {Inject} from "@angular/core";

import * as _ from 'underscore';
import {FeedItem} from "../dao/feed-item.dao";
import {response} from "../interfaces/response.interface";
import IFeedItemResponse = response.IFeedItemResponse;
import {ReplaySubject} from "rxjs/ReplaySubject";

interface ICacheService {

}

export class CacheService implements ICacheService {
    private _feed: ReplaySubject<FeedItem[]>;

    constructor(@Inject(DataService) private dataService: DataService) {
        this._feed = new ReplaySubject();
    }

    cacheFeed(): void {
        this.dataService.loadFeed().subscribe((feedResponse: any) => {
            let feedTemp = [];
            _.each(feedResponse, (feedItem: IFeedItemResponse) => {
                feedTemp.push(feedItem);
            });
            this.setUserPlans(feedTemp);
        });
    }

    get feed(): ReplaySubject<FeedItem[]> {
        return this._feed;
    }

    setUserPlans(value: FeedItem[]) {

        this._feed.next(value);
    }
}