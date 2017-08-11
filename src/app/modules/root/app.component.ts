import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CacheService} from "../shared/services/cache.service";
import {TagService} from "../shared/services/entity-services/tag.service";
import {FacebookService, InitParams, LoginStatus} from "ngx-facebook";
import {AuthService} from "../shared/services/auth.service";
import {FilterService} from "app/modules/feed/services/filter.service";
import {APP_CONFIG} from "./app.config";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    loggedIn: boolean;

    constructor(private cacheService: CacheService,
                private tagService: TagService,
                private filterService: FilterService,
                private authService: AuthService,
                private facebookService: FacebookService,
                translateService: TranslateService) {
        translateService.use('cz');

        const initParams: InitParams = {
            appId: APP_CONFIG.facebook.key,
            xfbml: true,
            version: 'v2.10'
        };
        this.loggedIn = false;

        facebookService.init(initParams);
    }

    ngOnInit(): void {
        this.authService.isLoggedIn.subscribe((response: boolean) => {

            if (response) {
                this.authService.getFacebookUserInfo();
                this.authService.getFacebookUserFriends();
                this.tagService.cacheAvailableTags();

                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        });
    }
}
