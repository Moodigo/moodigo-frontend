import {Component, EventEmitter, OnInit, ViewChild, ViewChildren} from "@angular/core";
import {FilterService} from "../../services/entity-services/filter.service";
import {Tag} from "../../entity/tag";
import {MaterializeAction} from "angular2-materialize";
import {SebmGoogleMap, SebmGoogleMapMarker} from "angular2-google-maps/core";

@Component({
    selector: 'side-filter',
    templateUrl: 'side-filter.template.html'
})
export class SideFilterComponent implements OnInit {

    @ViewChild(SebmGoogleMap) private map: SebmGoogleMap;
    @ViewChildren(SebmGoogleMapMarker) private markers: Array<SebmGoogleMapMarker>;

    filterTags: Tag[];
    lat: number = 51.678418;
    lng: number = 7.809007;
    modalActions: EventEmitter<MaterializeAction> = new EventEmitter();

    constructor(private filterService: FilterService) {
        filterService.filterTags.subscribe((filterTags: Tag[]) => {
            this.filterTags = filterTags;
        });
    }

    ngOnInit(): void {

    }

    openLocationModal() {
        this.modalActions.emit({action: 'modal', params: ['open']});
        this.map.triggerResize();
    }

    closeLocationModal() {
        this.modalActions.emit({action: 'modal', params: ['close']});
    }

    onClick() {
        //TODO: clicking on map needs to add marker
    }

    toggleTagActive(tagId: number) {
        //TODO: when activating tags in filter, filtering of feed needs to happen
    }
}