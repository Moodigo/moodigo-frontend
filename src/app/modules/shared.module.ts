import {ModuleWithProviders, NgModule} from '@angular/core';
import {MainMenuComponent} from '../components/mainmenu/main-menu.component';
import {LoaderComponent} from '../components/loader/loader.component';
import {TagComponent} from '../components/tag/tag.component';
import {KeysPipe} from '../pipes/keys-iterate.pipe';
import {FormatDatePipe} from '../pipes/format-date.pipe';
import {MaterializeModule} from 'angular2-materialize';
import {FilterService} from '../services/entity-services/filter.service';
import {AuthService} from '../services/auth.service';
import {CacheService} from '../services/cache.service';
import {DataService} from '../services/data.service';
import {TagService} from '../services/entity-services/tag.service';
import {HelperService} from '../services/helper.service';
import {MdIconModule, MdIconRegistry} from '@angular/material';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {Http, HttpModule} from '@angular/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule} from '@angular/common';
import {NgxAni, NgxCss} from 'ngxani';
import {UserIconComponent} from '../components/user-icon/user-icon.component';
import {ActivityIconComponent} from '../components/activity-icon/activity-icon.component';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/locale-', '.json');
}

@NgModule({
    declarations: [
        MainMenuComponent,
        ActivityIconComponent,
        LoaderComponent,
        TagComponent,
        FormatDatePipe,
        UserIconComponent,
        KeysPipe
    ],
    imports: [
        CommonModule,
        AgmCoreModule,
        MdIconModule,
        TranslateModule,
        MaterializeModule,
        FlexLayoutModule,
        HttpModule
    ],
    exports: [
        CommonModule,
        MaterializeModule,
        AgmCoreModule,
        TranslateModule,
        KeysPipe,
        MainMenuComponent,
        LoaderComponent,
        UserIconComponent,
        ActivityIconComponent,
        TagComponent,
        FormatDatePipe,
        MdIconModule,
        FlexLayoutModule
    ],
    bootstrap: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                FilterService,
                AuthService,
                CacheService,
                DataService,
                TagService,
                HelperService,
                MdIconRegistry,
                NgxAni,
                NgxCss
            ]
        };
    }
}
