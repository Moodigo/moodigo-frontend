import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {MainmenuComponent} from "./components/mainmenu/mainmenu.component";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MaterializeModule} from "ng2-materialize";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MdIconModule, MdIconRegistry} from "@angular/material";

export function HttpLoaderFactory(http: Http) {
	return new TranslateHttpLoader(http, './assets/i18n/locale-', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		MainmenuComponent
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
		HttpModule,MdIconModule,
	],
	providers: [MdIconRegistry],
	bootstrap: [AppComponent]
})
export class AppModule {
}
