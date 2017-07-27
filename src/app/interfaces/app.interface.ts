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
