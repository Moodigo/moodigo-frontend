export interface IFeedItemResponse {
    id: number;
    header: string;
    date: string;
    time: string;
    location: ILocationResponse;
    type: string;
    imageUrl: string;
    userList: IUserResponse[];
}

export interface IUserResponse {
    id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    age: number;
    imageUrl: string;
}

export interface ILocationResponse {
    text: string;
}

interface ITagResponsePayload extends Response {
    payload: ITagResponse[];
}

export interface ITagResponse {
    id: number;
    name: string;
}

export interface Response {
    payload: any;
    status?: {
        type: string;
        code: number;
        message: string;
    }
}
