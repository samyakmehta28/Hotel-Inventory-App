import { RoomsService } from './../services/rooms.service';
import { Component } from '@angular/core';
import { Room } from '../rooms_details';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'hinv-add-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.scss'
})
export class AddRoomComponent implements OnInit{
  room: Room = {
    roomNumber : '0',
    roomType : '',
    amenities : '',
    price : 0,
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    rating: 0
  }

  roomTypes:string[] = ['Single', 'Double', 'Queen', 'King', 'Twin', 'Double-double', 'Studio', 'Master Suite', 'Mini-Suite', 'Presidential Suite']
  successMessage:string = '';
  constructor(private roomsService: RoomsService) {}

  addRoom(addRoomForm:NgForm){
    this.roomsService.addSingleRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room added successfully';
      setTimeout(() => {
        addRoomForm.resetForm({
          roomType: '', // Use a placeholder or initial value
          amenities: '',
          price: 0,
          checkinTime: new Date(),
          checkoutTime: new Date(),
          photos: '',
          rating: 0
        });
        this.successMessage = ''; // Clear success message after resetting the form
      }, 1000); // 3000 milliseconds = 3 seconds
    });
  }

  ngOnInit(): void {
    this.successMessage = '';
  }

}
