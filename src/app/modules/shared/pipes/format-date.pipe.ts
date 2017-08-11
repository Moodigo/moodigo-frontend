import {Pipe, PipeTransform} from '@angular/core';
import {APP_CONFIG} from '../../root/app.config';
import * as moment from 'moment';

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
    transform(dateInput: any): any {

        let formatedDate: string;

        const today: moment.Moment = moment();
        const timeDiff = today.diff(dateInput, 'days');

        if (timeDiff < 1) {
            formatedDate = 'date.today';
        } else if (timeDiff < 2) {
            formatedDate = 'date.yesterday';
        } else {
            formatedDate = dateInput.format(APP_CONFIG.date.shortFormat);
        }
        return formatedDate;
    }
}

