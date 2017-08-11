import {Component, OnInit} from '@angular/core';
import {HelperService} from '../../../../shared/services/helper.service';
import {TagService} from '../../../../shared/services/entity-services/tag.service';
import {AuthService} from '../../../../shared/services/auth.service';
import {APP_CONFIG} from '../../../../root/app.config';
import {User} from '../../../../shared/entity/user';

@Component({
    selector: 'new-event-field',
    templateUrl: 'new-event-field.template.html'
})
export class NewEventFieldComponent implements OnInit {
    protected isActive = false;
    autocompleteInit: any;
    titleLengthLimit: number;
    currentUser: User;

    constructor(private tagService: TagService,
                private helperService: HelperService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.titleLengthLimit = APP_CONFIG.event.titleCharLimit;
        this.tagService.allTagsAsArray.subscribe((availableTags: string[]) => {
            const tagsAutocompleteFormat = this.helperService.stringArrayToMaterialAutocompleteFormat(availableTags);

            this.autocompleteInit = {
                autocompleteOptions: {
                    data: tagsAutocompleteFormat,
                    limit: 10,
                    minLength: 1
                }
            };
        });

        this.authService.isLoggedIn.subscribe(() => {
            this.currentUser = this.authService.currentUser;
        });
    }

    private openNewEventWindow() {
        this.isActive = true;
    }

    private closeNewEventWindow() {
        this.isActive = false;
    }
}
