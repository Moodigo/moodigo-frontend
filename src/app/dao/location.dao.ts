import {response} from "../interfaces/response.interface";
import ILocationResponse = response.ILocationResponse;

export class Location {
    text: string;

    constructor(locationResponse: ILocationResponse) {
       this.text = locationResponse.text;
    }
}