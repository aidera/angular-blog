import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../shared/models/User';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Icons} from '../../../shared/constants/icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  icons = Icons;
  form: FormGroup;
  message: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Please login to visit other pages';
      } else if (params.authFailed) {
        this.message = 'The session has expired. Please login again.';
      }
    });

    this.form = new FormGroup({
      userEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      rememberMe: new FormControl(true),
    });
  }



  submit(): void {
    console.log(this.form);
    if (!this.form.invalid) {

      const user: User = {
        email: this.form.value.userEmail,
        password: this.form.value.password,
      };

      this.auth.login(user).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'dashboard']);
      });
    }
  }

}
