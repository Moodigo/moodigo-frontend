
import {ILocationResponse} from "../interfaces/response.interface";

export class Location {
    text: string;

    constructor(locationResponse: ILocationResponse) {
       this.text = locationResponse.text;
    }
}