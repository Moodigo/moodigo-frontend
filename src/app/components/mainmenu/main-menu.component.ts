import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {APP_CONFIG} from "../../app.config";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'main-menu',
    templateUrl: 'main-menu.template.html'
})

export class MainMenuComponent {

    dropdownSetting: any;

    constructor(protected authService: AuthService,
                private router: Router) {
        this.dropdownSetting = {
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'left', // Displays dropdown with edge aligned to the left of button
            stopPropagation: false // Stops event propagation
        }
    }

    logout() {
        this.authService.logoutFacebook().subscribe(() => {
            this.router.navigate([APP_CONFIG.routes.login]);
        });

    }
}
