import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FacebookService} from 'ngx-facebook';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Route, RouterModule} from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';
import {ProfileModule} from '../profile/profile.module';
import {SharedModule, HttpLoaderFactory} from '../shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {Http} from '@angular/http';
import {APP_CONFIG} from './app.config';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {FacebookModule} from 'ngx-facebook';
import LoginModule from 'app/modules/login/login.module';

const routes: Route[] = [
    {
        path: '',
        loadChildren: '../feed/feed.module'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        ProfileModule,
        LoginModule,
        NoopAnimationsModule,
        SharedModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: APP_CONFIG.googleMaps.key
        }),
        FacebookModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        AuthGuard, FacebookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
  
}
