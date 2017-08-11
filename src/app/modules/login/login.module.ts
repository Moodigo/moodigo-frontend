import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';


const routerConfig: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(routerConfig)
    ]
})
export default class LoginModule {
}
