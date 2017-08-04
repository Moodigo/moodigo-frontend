/**
 * Created by amrazek on 22/07/17.
 */
import {Inject} from "@angular/core";
import {Http} from "@angular/http";
import {IFeedItemResponse, ITagResponse} from "../interfaces/response.interface";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG} from "../app.config";
import {AuthService} from "./auth.service";

export class DataService {

    constructor(@Inject(Http) private http: Http,
                @Inject(AuthService) private authService: AuthService,) {
    }

    loadFeed(): Observable<IFeedItemResponse[]> {
        return this.http.get(APP_CONFIG.api.url + 'feed/').map((response: any) => {
            return <IFeedItemResponse[]>response.json();
        });
    }

    loadAvailableTags(): Observable<ITagResponse[]> {
        return this.http.get(APP_CONFIG.api.url + 'available-tags/').map((response: any) => {
            console.log(response.json());
            return <ITagResponse[]> response.json();
        })
    }

    loadUserFilterTags(): Observable<ITagResponse[]> {
        return this.http.get(APP_CONFIG.api.url + 'users/' + this.authService.currentUser.id + '/tags/').map((response: any) => {
            console.log(response);
            return <ITagResponse[]> response.json();
        });
    }
}
