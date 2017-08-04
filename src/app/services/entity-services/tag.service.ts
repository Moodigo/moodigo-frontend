import {Tag} from "../../entity/tag";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {DataService} from "../data.service";
import {Inject} from "@angular/core";
import {ITagResponse} from "../../interfaces/response.interface";
import {ITag} from "../../interfaces/app.interface";
import * as _ from "underscore";

export class TagService {

    private _availableTags: ReplaySubject<Tag[]>;
    private _availableTagsStringArr: ReplaySubject<string[]>;

    constructor(@Inject(DataService) private dataService: DataService) {
        this._availableTags = new ReplaySubject();
        this._availableTagsStringArr = new ReplaySubject();

    }

    cacheAvailableTags(): void {
        this.dataService.loadAvailableTags().subscribe((availableTagsResponse: ITagResponse[]) => {
            let availableTagsTemp: ITag[] = [];
            _.each(availableTagsResponse, (availableTagResponse: ITagResponse) => {
                availableTagsTemp.push(new Tag(availableTagResponse));
            });
            this.setAvailableTags(availableTagsTemp);
        });
    }

    get allTagsAsArray(): ReplaySubject<string[]> {
        let returnTagArray: string[] = [];

        this.availableTags.subscribe((availableTags: Tag[]) => {

            _.each(availableTags, (tag: Tag) => {
                returnTagArray.push(tag.name);
            });
            this._availableTagsStringArr.next(returnTagArray);
        });

        return this._availableTagsStringArr;
    }

    get availableTags(): ReplaySubject<Tag[]> {
        return this._availableTags;
    }

    setAvailableTags(availableTags: Tag[]) {
        this._availableTags.next(availableTags);
    }
}