import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-room-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-booking.component.html',
  styleUrl: './room-booking.component.scss'
})
export class RoomBookingComponent implements OnInit{

  id:number=0;
  id$:Observable<string | null> = this.router.paramMap.pipe(map((params) => params.get('roomid')));

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    //this.id = this.router.snapshot.params['roomid'];  //value will never be updated
    //this.router.params.subscribe(params => { this.id=params['roomid'];});
    //this.id$ = this.router.params.pipe(map(params => params['roomid']));
    //this.router.paramMap.subscribe(params => {params.get('roomid');})
  }

}
