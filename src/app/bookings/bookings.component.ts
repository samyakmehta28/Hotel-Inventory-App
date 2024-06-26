import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BookingsService } from './bookings.service';
import { CustomValidatorService } from './custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-bookings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInputModule, MatDatepickerModule, MatNativeDateModule, 
    MatButtonModule, MatExpansionModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {

  bookingForm!: FormGroup;
  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private fb: FormBuilder,
    private bookingsService: BookingsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    this.bookingForm = this.fb.group({
      bookingId: new FormControl('', {validators:[Validators.required]}),
      roomId: new FormControl({value: roomId, disabled: true},{validators:[Validators.required]}),
      guestEmail: new FormControl('', {validators:[Validators.required, Validators.email]}),
      checkinDate: new FormControl('', {validators:[Validators.required]}),
      checkoutDate: new FormControl('', {validators:[Validators.required]}),
      bookingStatus: new FormControl('', {validators:[Validators.required]}),
      bookingAmount: new FormControl('', {validators:[Validators.required]}),
      bookingDate: new FormControl('', {validators:[Validators.required]}),
      mobileNumber: new FormControl('', {validators:[Validators.required]}),
      guestName: new FormControl('', {validators:[Validators.required, Validators.minLength(3)]}),
      address: this.fb.group({
        addressLine1: new FormControl('', {validators:[Validators.required]}),
        addressLine2: new FormControl(''),
        city: new FormControl('', {validators:[Validators.required]}),
        state: new FormControl('', {validators:[Validators.required]}),
        country: new FormControl('', {validators:[Validators.required]}),
        zipCode: new FormControl('', {validators:[Validators.required]}),
      }),
      guestCount: new FormControl(''),
      guests: this.fb.array([])
    }, {validators: CustomValidatorService.validateDate});
  }

  // RxJS mergemap sends POST request as soon as it is made.
  //RxJS switchmap cancels previous POST before sending new POST request
  //RxJS exhaust map waits for the first POST request to complete before sending the next POST request

  addBooking() {
    // This will also get values that are in disabled state
    console.log(this.bookingForm.getRawValue());
    this.bookingsService.bookRoom(this.bookingForm.getRawValue()).subscribe((response) => {
      console.log(response);
    });
    this.bookingForm.reset(
      {
        bookingId: '',
        roomId: '',
        guestEmail: '',
        checkinDate: '',
        checkoutDate: '',
        bookingStatus: '',
        bookingAmount: '',
        bookingDate: '',
        mobileNumber: '',
        guestName: '',
        address: {
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          country: '',
          zipCode: '',
        },
        guestCount: '',
        guests: []
      }
    );
  
  }

  addGuest(){
    this.guests.push(this.fb.group({guestName: ['', {validators:[Validators.required, Validators.minLength(3)]}], 
      guestEmail: ['', {validators:[Validators.required, Validators.email]}], 
      age: ['', {validators:[Validators.required]}]}));
  }

  addPassport(){
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport(){
    this.bookingForm.removeControl('passport');
  }
  removeGuest(index: number){
    this.guests.removeAt(index);
  }

}


