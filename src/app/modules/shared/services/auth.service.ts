import {ReplaySubject} from 'rxjs/ReplaySubject';
import {FacebookService, LoginOptions, LoginResponse, LoginStatus} from 'ngx-facebook';
import {Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {User} from '../entity/user';
import {APP_CONFIG} from '../../root/app.config';
import {IFacebookUserFields} from '../../../interfaces/app.interface';
import {IUserResponse} from '../../../interfaces/response.interface';

export class AuthService {

    public isLoggedIn: ReplaySubject<boolean>;
    public currentUser: User;
    private facebookOptions: LoginOptions;

    constructor(@Inject(FacebookService) private facebookService: FacebookService) {
        this.isLoggedIn = new ReplaySubject();
        this.facebookOptions = {
            scope: APP_CONFIG.facebook.scope,
            return_scopes: true,
            enable_profile_selector: true
        };
    }

    loginFacebook(): Observable<boolean> {
        return Observable.fromPromise(this.facebookService.login(this.facebookOptions)
            .then((response: LoginResponse) => {
                return true;
            })
            .catch((error: any) => console.error(error))
        );
    }

    logoutFacebook(): Observable<boolean> {
        return Observable.fromPromise(this.facebookService.logout().then((response) => {
            this.isLoggedIn.next(false);
            return true;
        }));
    }

    getFacebookUserFriends(): void {
        this.facebookService.api('/' + APP_CONFIG.facebook.version + '/' + this.currentUser.id + '/friends').then((response: any) => {

        });
    }

    getFacebookUserInfo(): void {
        this.facebookService.api(
            '/' + APP_CONFIG.facebook.version + '/' + this.currentUser.id + '?fields=' + APP_CONFIG.facebook.fields.toString())
            .then((response: IFacebookUserFields) => {
                this.currentUser.firstname = response.first_name;
                this.currentUser.lastname = response.last_name;
                this.currentUser.imageUrl = 'http://graph.facebook.com/' + this.currentUser.id + '/picture?type=square';
            });
    }

    isLoggedInWithFacebook(): Observable<boolean> {
        return Observable.fromPromise(this.facebookService.getLoginStatus().then((response: LoginStatus) => {
            console.log(response);
            if (response.status === 'connected') {
                this.currentUser = new User(<IUserResponse>{ id: response.authResponse.userID });
                this.isLoggedIn.next(true);
                return true;
            } else {
                return false;
            }
        }));
    }
}
