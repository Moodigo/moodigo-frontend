export interface IUser {
    firstname: string;
    lastname: string;
    nickname: string;
    age: number;
    gender: string;
    status: string;
    imageUrl: string;
}

export interface ILocation {
    text: string;
}

export interface IFeedItem {
    header: string;
    location: ILocation;
    userList: IUser[];
    type: string;
    imageUrl: string;
}

export interface ITag {
    id: number;
    name: string;
    type?: string;
}

export interface ITagCategory {
    [key: string]: ITag[];
}

export interface IFacebookUserFields {
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    name_format: string;
    gender: string;
    birthday: string;
    about: string;
    cover: string;
    hometown: string;
    is_verified: string;
    verified: string;
    languages: string;
    link: string;
    locale: string;
    sports: string;
    timezone: string;
    website: string;
    work: string;
}

export class ActivityTypes {
    static SPORT = 'sport';
    static TRAVEL = 'travel';
    static LEARN = 'learn';
    static PARTY = 'party';
    static DATE = 'date';
    static HANGOUT = 'hangout';

    static getActivityIcon(activityType: string): string {
        let iconName: string;

        switch (activityType) {
            case ActivityTypes.LEARN:
                iconName = 'lightbulb_outline';
                break;
            case ActivityTypes.PARTY:
                iconName = '';
                break;
            case ActivityTypes.SPORT:
                iconName = 'rowing';
                break;
            case ActivityTypes.TRAVEL:
                iconName = 'flight_takeoff';
                break;
            case ActivityTypes.DATE:
                iconName = 'favorite';
                break;
            case ActivityTypes.HANGOUT:
                iconName = 'theaters';
                break;
            default:
                iconName = '';
        }
        return iconName;
    }
}
