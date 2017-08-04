import * as _ from "underscore";


export class HelperService {
    public stringArrayToMaterialAutocompleteFormat(stringArr: string[]) {
        let autocompleteFormatReturn = '{';

        _.each(stringArr, (stringMember: string) => {
            autocompleteFormatReturn += '"'+stringMember + '":' + null + ',';
        });
        autocompleteFormatReturn = autocompleteFormatReturn.slice(0, autocompleteFormatReturn.length - 1);
        autocompleteFormatReturn+='}';

        return JSON.parse(autocompleteFormatReturn);
    }
}
