import {ITagResponse} from '../interfaces/response.interface';

export class Tag {
    id: number;
    name: string;
    type: string;

    constructor(tagResponse: ITagResponse) {
        this.id = tagResponse.id;
        this.name = tagResponse.name;
        this.type = tagResponse.type;
    }
}
