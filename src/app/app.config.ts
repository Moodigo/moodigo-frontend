export const APP_CONFIG = {
    event: {
        titleCharLimit: 50
    },
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
    time: {
        shortFormat: 'H:m',
        mediumFormat: 'HH:mm'
    },
    snackBar: {
        duration: 5000,
        position: ''
    }
};
