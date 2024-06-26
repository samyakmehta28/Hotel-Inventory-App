import { CanDeactivateFn } from '@angular/router';
import { BookingsComponent } from '../bookings/bookings.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const bookingGuard: CanDeactivateFn<BookingsComponent> = (component, currentRoute, currentState, nextState) => {

  const snackBar = inject(MatSnackBar)

  if(component.bookingForm?.pristine) {
    return component.bookingForm?.pristine;
  }
  else {
    const snackBarRef = snackBar.open('You have unsaved changes. Do you want to continue?', 'Yes', {
      duration: 5000
    });

    snackBarRef.onAction().subscribe(() => {
      return true;
    });

    return false;
  }
};
