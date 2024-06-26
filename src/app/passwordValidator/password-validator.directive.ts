import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Validator } from '@angular/forms';

@Directive({
  selector: '[hinvPasswordValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    const value:string = control.value as string;
    if(value?.length>0 && value?.length < 5){
      return {invalidPassword: true, message: 'Password should be at least 5 characters long'};
    }
    return null;
  }
  constructor() { }

}
