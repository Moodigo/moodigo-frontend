import {InjectionToken} from "@angular/core";

export interface IAppConfig {
	snackBar: {
		duration: number;
		position: string;
	}
	routes:{
		login: string;
	};
	mockApi: string;
	api: {
		url: string
	};
	date: {
		shortFormat: string;
		mediumFormat: string;
		longFormat: string;
	};
}

export const APP_CONFIG: IAppConfig = {
	mockApi: '/assets/data/',
	routes:{
		login: '/login'
	},
	api: {
		url: ''
	},
	date: {
		shortFormat: 'D.M',
		mediumFormat: 'D.M.YY',
		longFormat: 'D.M.YYYY'
	},
	snackBar: {
		duration: 5000,
		position: ''
	}
};

export let IAppConfig = new InjectionToken<IAppConfig>('app.config');
