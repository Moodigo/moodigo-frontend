import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {APP_CONFIG} from "./app.config";

import {AppComponent} from './app.component';
import {MainMenuComponent} from "./components/mainmenu/main-menu.component";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MdIconModule, MdIconRegistry} from "@angular/material";
import {Route, RouterModule} from "@angular/router";
import {DataService} from "./services/data.service";
import {CacheService} from "./services/cache.service";
import {FeedComponent} from "./components/feed/feed.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {FeedItemComponent} from "./components/feed/feed-item/feed-item.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SideFilterComponent} from "./components/side-filter/side-filter.component";
import {SideSuggestsComponent} from "./components/side-suggests/side-suggests.component";
import {UserIconComponent} from "./components/user-icon/user-icon.component";
import {NgxAniModule, NgxAni} from 'ngxani';
import {NewEventFieldComponent} from "./components/event/new-event-field/new-event-field.component";
import {HelperService} from "./services/helper.service";
import {TagService} from "app/services/entity-services/tag.service";
import {MaterializeModule} from "angular2-materialize";
import {FacebookModule, FacebookService} from 'ngx-facebook';
import {AuthGuard} from "./guards/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {AuthService} from "./services/auth.service";
import {FilterService} from "./services/entity-services/filter.service";
import {TagComponent} from "./components/tag/tag.component";
import {AgmCoreModule} from "angular2-google-maps/core";


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/locale-', '.json');
}

const routes: Route[] = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: FeedComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        FeedComponent,
        SideFilterComponent,
        SideSuggestsComponent,
        UserIconComponent,
        FeedItemComponent,
        LoaderComponent,
        LoginComponent,
        TagComponent,
        NewEventFieldComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        NoopAnimationsModule,
        MaterializeModule,
        AgmCoreModule.forRoot({
            apiKey: APP_CONFIG.googleMaps.key
        }),
        FacebookModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        HttpModule, MdIconModule, FlexLayoutModule, NgxAniModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        FilterService, AuthService, CacheService, DataService, TagService,
        HelperService, MdIconRegistry, NgxAni, FacebookService, AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
