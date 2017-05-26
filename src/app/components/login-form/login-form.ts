import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

import { User }                         from '../../models/user';
import { AuthService, AuthCallback }    from '../../services/auth';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.html',
  styleUrls: [ './login-form.scss' ]
})
export class LoginFormComponent implements OnInit, AuthCallback {
    user: User;
    errorMessage: string;

    constructor(private authService: AuthService, private router: Router) {
        this.user = new User();
    }

    ngOnInit() {
        this.authService.retrieveSession(this);
    }

    login(): void {
       this.authService.authenticate(this.user.username, this.user.password, this);
    }

    OnRetrieveSession(message: string, isAuthenticated: boolean) {
        if (isAuthenticated) {
            this.router.navigate(['/dashboard']);
        }
    }

    OnAuthenticate(message:string, result:any) {
        if (message != null) { //error
            this.errorMessage = message;
        } else { //success
            this.router.navigate(['/dashboard']);
        }
    }
}
