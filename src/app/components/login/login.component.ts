import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      user_name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });

  }

  public submitForm(): void {
    Object.values(this.loginForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    let { user_name, password } = this.loginForm.value || {};
    let req = { user_name, password };
    this.userService.login(req)
      .subscribe(res => {
        if (res.code === 200) {
          this.router.navigate(['']);
          this.userService.isLogin = false;
        }
      })
  }

}
