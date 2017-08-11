import {Component, Input, OnInit} from '@angular/core';
import {ActivityTypes} from '../../../../interfaces/app.interface';

@Component({
    selector: 'activity-icon',
    templateUrl: 'activity-icon.template.html'
})
export class ActivityIconComponent implements OnInit {

    @Input() activityType: string;
    @Input() className: string;
    iconName: string;

    ngOnInit(): void {
        this.iconName = ActivityTypes.getActivityIcon(this.activityType);
    }
}
