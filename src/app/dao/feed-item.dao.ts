import {response} from "../interfaces/response.interface";
import IFeedItemResponse = response.IFeedItemResponse;
import IUserResponse = response.IUserResponse;

import * as _ from 'underscore';
import {User} from "./user.dao";
import {Location} from "./location.dao";

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