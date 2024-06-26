import {AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


export class CustomValidatorService {

  static validateDate(control: AbstractControl):ValidationErrors | null{

    let checkinDate = control.get('checkinDate')?.value;
    let checkoutDate = control.get('checkoutDate')?.value;
    //console.log(checkinDate, checkoutDate);
    if(!checkinDate || !checkoutDate){
      return null;
    }

    checkinDate = new Date(checkinDate);
    checkoutDate = new Date(checkoutDate);
    //console.log(checkinDate, checkoutDate);
    return checkinDate < checkoutDate ? null : { dateError: true };
  }

}
