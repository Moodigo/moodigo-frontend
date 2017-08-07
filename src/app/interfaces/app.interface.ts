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