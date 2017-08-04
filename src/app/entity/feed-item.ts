
import * as _ from 'underscore';
import {User} from "./user";
import {Location} from "./location";
import {IFeedItemResponse, IUserResponse} from "../interfaces/response.interface";

export class FeedItem {
    id: number;
    header: string;
    location: Location;
    type: string;
    imageUrl: string;
    userList: User[];

    constructor(feedItemResponse: IFeedItemResponse) {
        this.id = feedItemResponse.id;
        this.header = feedItemResponse.header;
        this.location = new Location(feedItemResponse.location);
        this.type = feedItemResponse.type;
        this.imageUrl = feedItemResponse.imageUrl;
        this.userList = [];
        _.each(feedItemResponse.userList, (user: IUserResponse) => {
            this.userList.push(new User(user));
        });
    }
}