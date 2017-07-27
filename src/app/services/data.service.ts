/**
 * Created by amrazek on 22/07/17.
 */
import {Inject} from "@angular/core";
import {Http} from "@angular/http";
import {IFeedItem} from "../interfaces/app.interface";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG} from "../app.config";

interface IDataService {
    feed: IFeedItem[];

    loadFeed(): Observable<IFeedItem[]>;
}

export class DataService implements IDataService {
    public feed: IFeedItem[];

    constructor(@Inject(Http) private httpService: Http) {
        this.feed = [];
    }

    loadFeed(): Observable<IFeedItem[]> {
        return this.httpService.get(APP_CONFIG.api.url + 'feed/').map((response: any) => {
            return <IFeedItem[]>response.json();
        });
    }
}
