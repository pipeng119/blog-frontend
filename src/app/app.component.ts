import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

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

    this.userService.login()
      .subscribe(res => {
        console.log(res)
      })
  }
}
