import {Component, OnInit, HostBinding} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.template.html',
    host: {
        '[attr.fxFill]': '100'
    },
})
export class LoginComponent implements OnInit {
    @HostBinding('class') classes = 'width-100 height-100';

    formGroup: FormGroup;

    constructor(private authService: AuthService,
                private router: Router) {

        authService.isLoggedInWithFacebook().subscribe((isLoggedIn: boolean)=>{
            if(isLoggedIn){
                this.router.navigate(['']);
            }
        });
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });
    }

    login(): void {
        this.authService.loginFacebook().subscribe((isAuthenticated) => {
            if (isAuthenticated) {
                this.router.navigate(['']);
            }
        })
    }
}
