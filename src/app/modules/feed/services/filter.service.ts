import {Tag} from '../../shared/entity/tag';
import {Inject} from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import * as _ from 'underscore';
import {ITagResponse} from '../../../interfaces/response.interface';
import {ITagCategory} from '../../../interfaces/app.interface';
import {Observable} from 'rxjs/Observable';

export class FilterService {
    filterTags: ReplaySubject<Tag[]>;

    constructor(@Inject(DataService) private dataService: DataService) {
        this.filterTags = new ReplaySubject();
    }

    cacheFilterTags() {
        this.dataService.loadUserFilterTags().subscribe((filterTags: ITagResponse[]) => {
            const tempFilterTags: Tag[] = [];
            _.each(filterTags, (filterTag: ITagResponse) => {
                tempFilterTags.push(new Tag(filterTag));
            });
            this.filterTags.next(tempFilterTags);
        });
    }

    getAllTagsGroupedByType(): Observable<ITagCategory[]> {
        return this.filterTags.map((filterTags: Tag[]) => {
            return _.groupBy(filterTags, (tag) => {
                return tag.type;
            });
        });
    }
}
