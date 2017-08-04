import {InjectionToken} from "@angular/core";

export interface IAppConfig {
    facebook: {
        version: string;
        key: string;
        fields: string[];
        scope: string;
    }
    googleMaps: {
        key: string;
    };
    snackBar: {
        duration: number;
        position: string;
    }
    routes: {
        login: string;
    };
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
    facebook: {
        version: 'v2.10',
        key: '1615469685172560',
        fields: [
            'email', 'first_name', 'middle_name', 'last_name', 'name_format', 'gender', 'birthday', 'about',
            'cover', 'hometown', 'is_verified', 'verified', 'languages', 'link', 'locale', 'sports', 'timezone', 'website', 'work'
        ],
        scope: 'public_profile,user_friends,email,pages_show_list' //what we want from user when he loggs in with FB
    },
    googleMaps: {
        key: 'AIzaSyC7JJR-15ShKgZ7cDTP8AGaMKHl5e1M6B8'
    },
    routes: {
        login: '/login'
    },
    api: {
        url: 'http://localhost:9002/'
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
