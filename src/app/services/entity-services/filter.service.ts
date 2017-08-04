import {Tag} from "../../entity/tag";
import {Inject} from "@angular/core";
import {DataService} from "../data.service";
import {ReplaySubject} from "rxjs/ReplaySubject";
import * as _ from 'underscore';
import {ITagResponse} from "../../interfaces/response.interface";

export class FilterService {
    filterTags: ReplaySubject<Tag[]>;

    constructor(@Inject(DataService) private dataService: DataService) {
        this.filterTags = new ReplaySubject();
    }

    cacheFilterTags() {
        this.dataService.loadUserFilterTags().subscribe((filterTags: ITagResponse[]) => {
            let tempFilterTags: Tag[] = [];
            _.each(filterTags, (filterTag: ITagResponse) => {
                tempFilterTags.push(new Tag(filterTag));
            });
            this.filterTags.next(tempFilterTags);
        });
    }
}