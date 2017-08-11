import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../modules/shared/services/auth.service';
import {APP_CONFIG} from '../modules/root/app.config';

export class AuthGuard implements CanActivate {

    constructor(@Inject(Router) private router: Router,
                @Inject(AuthService) private authService: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.authService.isLoggedInWithFacebook().map(loginResponse => {
            if (loginResponse) {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        }).catch((err) => {
            this.router.navigate([APP_CONFIG.routes.login]);
            return Observable.of(false);
        });
    }
}
