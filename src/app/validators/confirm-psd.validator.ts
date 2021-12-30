import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// 自定义表单验证器
export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  const res = password && confirmPassword && password.value === confirmPassword.value ? null : { isSame: true }
  return res;
};
