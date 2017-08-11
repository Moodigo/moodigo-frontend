import {Component, EventEmitter, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {FilterService} from '../../services/filter.service';
import {MaterializeAction} from 'angular2-materialize';
import {SebmGoogleMap, SebmGoogleMapMarker} from 'angular2-google-maps/core';
import {ITagCategory} from '../../../../interfaces/app.interface';

@Component({
    selector: 'side-filter',
    templateUrl: 'side-filter.template.html'
})
export class SideFilterComponent implements OnInit {

    @ViewChild(SebmGoogleMap) private map: SebmGoogleMap;
    @ViewChildren(SebmGoogleMapMarker) private markers: Array<SebmGoogleMapMarker>;

    filterTags: ITagCategory[];
    lat: number;
    lng: number;
    modalActions: EventEmitter<MaterializeAction> = new EventEmitter();
    pushpinSetting: any;

    constructor(private filterService: FilterService) {

    }

    ngOnInit(): void {
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.pushpinSetting = { offset: 45 };

        this.filterService.getAllTagsGroupedByType().subscribe((tagCategoryList: ITagCategory[]) => {
            this.filterTags = tagCategoryList;
        });
    }

    openLocationModal() {
        this.modalActions.emit({ action: 'modal', params: ['open'] });
        this.map.triggerResize();
    }

    closeLocationModal() {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    }

    onMapClick() {
        //TODO: clicking on map needs to add marker
    }

    toggleTagActive(tagId: number) {
        //TODO: when activating tags in filter, filtering of feed needs to happen
    }
}
