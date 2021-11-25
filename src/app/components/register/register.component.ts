import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {


  public registeForm!: FormGroup;

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.registeForm.controls.password.value) {
      return { isNotSame: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: NzMessageService
  ) { }

  public ngOnInit(): void {
    this.registeForm = this.fb.group({
      user_name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [
        null, [
          Validators.required,
          this.confirmValidator
        ]
      ]
    });
  }

  public submitForm(): void {
    Object.values(this.registeForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    let { user_name, password } = this.registeForm.value || {};
    let req = { user_name, password };
    this.userService.resigter(req)
      .subscribe(res => {
        if (res.code === 200) {
          this.router.navigate(['/sign_in']);
          this.userService.isLogin = false;
        } else if (res.code === 400) {
          this.messageService.create('error', res.message)
        }
      })
  }

}
