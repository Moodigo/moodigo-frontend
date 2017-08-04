import {Component, OnInit, ViewChild} from "@angular/core";
import {HelperService} from "../../../services/helper.service";
import {TagService} from "../../../services/entity-services/tag.service";
import {AuthService} from "../../../services/auth.service";
import {MaterializeDirective} from "angular2-materialize";

@Component({
    selector: 'new-event-field',
    templateUrl: 'new-event-field.template.html'
})
export class NewEventFieldComponent implements OnInit {
    protected isActive = false;
    autocompleteInit: any;

    constructor(private tagService: TagService,
                private helperService: HelperService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.tagService.allTagsAsArray.subscribe((availableTags: string[]) => {
            let tagsAutocompleteFormat = this.helperService.stringArrayToMaterialAutocompleteFormat(availableTags);

            this.autocompleteInit = {
                autocompleteOptions: {
                    data: tagsAutocompleteFormat,
                    limit: 10,
                    minLength: 1
                }
            };
        });
    }

    private openNewEventWindow() {
        this.isActive = true;
    }

    private closeNewEventWindow() {
        this.isActive = false;
    }
}
