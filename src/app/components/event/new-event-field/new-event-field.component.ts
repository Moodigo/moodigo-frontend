import {Component} from "@angular/core";

@Component({
    selector: 'new-event-field',
    templateUrl: 'new-event-field.template.html'
})
export class NewEventFieldComponent {
    private active = false;

    private activate() {
        this.active = true;
        Materialize.updateTextFields();
    }

    private deactivate() {
        this.active = false;
    }
}