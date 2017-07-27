import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {MainMenuComponent} from "./components/mainmenu/main-menu.component";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MaterializeModule} from "ng2-materialize";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MdIconModule, MdIconRegistry} from "@angular/material";
import {RouterModule} from "@angular/router";
import {DataService} from "./services/data.service";
import {CacheService} from "./services/cache.service";
import {FeedComponent} from "./components/feed/feed.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {FeedItemComponent} from "./components/feed/feed-item/feed-item.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SideFilterComponent} from "./components/side-filter/side-filter.component";
import {SideSuggestsComponent} from "./components/side-suggests/side-suggests.component";
import {UserIconComponent} from "./components/user-icon/user-icon.component";
import { NgxAniModule, NgxAni } from 'ngxani';
import {NewEventFieldComponent} from "./components/event/new-event-field/new-event-field.component";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/locale-', '.json');
}

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
        NewEventFieldComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        FormsModule,
        NoopAnimationsModule,
        MaterializeModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        HttpModule, MdIconModule, FlexLayoutModule, NgxAniModule,
        RouterModule.forRoot([
            {
                path: 'feed',
                component: FeedComponent
            }
        ])
    ],
    providers: [CacheService, DataService, MdIconRegistry, NgxAni],
    bootstrap: [AppComponent]
})
export class AppModule {
}
