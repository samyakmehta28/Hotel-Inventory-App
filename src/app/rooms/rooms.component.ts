import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsInfo, Room } from './rooms_details';
import { RoomsTableComponent } from './rooms-table/rooms-table.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subscription, of, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsTableComponent, HeaderComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  //providing the service in the component level, means a seprate instance of this service will be used here instead of a root service.
  providers: [RoomsService]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hideRooms: boolean = true;
  hotelName = 'Hilton Hotel';
  //numberOfRooms = 100;
  roomsInfo: RoomsInfo = {};

  roomList: Room[] = [];

  selectedRoom: Room | undefined;

  stream = new Observable<string>(observable => {
    observable.next('user1');
    observable.next('user2');
    observable.next('user3');
    observable.complete();
  });

  constructor(private roomsService: RoomsService) { 
    this.headerComponent = new HeaderComponent(); // Initialize here
  }

  // use ViewChild on the child component, only to get those components that are not dynamically changed or created
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  // for viewChildren user @ViewChildren along with QueryList<>

  subscription !: Subscription

  rooms$ = this.roomsService.getAllRooms$

  priceFilter = new FormControl(0)

  //maps through every observable in array of observables. the first observable here is array of rooms
  roomsCount$ = this.roomsService.getAllRooms$.pipe(map((rooms) => rooms.length))

  totalBytes: number = 0;
  ngOnInit(): void {

    /*this.roomsService.getPhotos().subscribe(event => {
      switch(event.type){
        case HttpEventType.Sent:
          console.log('Request has been made');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response Header has been received');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes = event.loaded || 0;
          console.log('Download Progress:', this.totalBytes);
          break;
        case HttpEventType.Response:
          console.log(event.body);
          break;
      }
    });*/

    //console.log(this.headerComponent)
    /*this.stream.subscribe(data=>{
      console.log(data);
    });

    this.stream.subscribe({
      next: data => console.log(data),
      complete: () => console.log('Completed'),
      error: err => console.log(err)
    });*/

    /*this.subscription = this.roomsService.getAllRooms$.subscribe(rooms => {
      this.roomList = rooms;
      },
      error => {
        console.log('Error:', error.message)
        return of([]);
      }
    );*/

    this.roomsInfo = {
      availableRooms: 50,
      bookedRooms: 50,
      totalRooms: 120
    };
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
  }

  ngDoCheck(): void {
    //console.log('Rooms Component DoCheck')
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: Room){
    this.selectedRoom = room;
  }

  getAllRooms(){
    this.selectedRoom = undefined;
  }

  addRoom(){
    //console.log('Adding new room')
    const newRoom: Room = {
      roomNumber: '104',
      roomType: 'Single',
      amenities: 'TV, AC, WiFi',
      photos: 'single.jpg',
      price: 1000,
      checkinTime: new Date('2021-06-01T10:00:00'),
      checkoutTime: new Date('2021-06-01T12:00:00'),
      rating: 4
    };
    //this.roomList = [...this.roomList, newRoom];
    this.roomsService.addSingleRoom(newRoom).subscribe(rooms => {
      this.roomList = rooms;
    });
    this.roomsInfo = {...this.roomsInfo, 'availableRooms': this.roomsInfo.availableRooms! + 1}
  }

  editRoom(){
    const newRoom: Room = {
      roomNumber: '3',
      roomType: 'Suite',
      amenities: 'TV, AC, WiFi, Jacuzzi',
      photos: 'deluxe.jpg',
      price: 10000,
      checkinTime: new Date('2021-06-01T10:00:00'),
      checkoutTime: new Date('2021-06-01T12:00:00'),
      rating: 4
    };

    this.roomsService.updateSingleRoom(newRoom).subscribe(rooms => {
      this.roomList = rooms;
    });
  }

  deleteRoom(){
    this.roomsService.deleteSingleRoom('62bb1955-4800-4ebc-afde-eae50c8486d0').subscribe(rooms => {
      this.roomList = rooms;
    });
    this.roomsInfo = {...this.roomsInfo, 'availableRooms': this.roomsInfo.availableRooms! - 1}
  }

  ngOnDestroy(): void {
    if(this.subscription){
      console.log("destroying rooms component")
      this.subscription.unsubscribe();
    }
  }
}
