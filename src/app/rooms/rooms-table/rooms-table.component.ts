import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Room } from '../rooms_details';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'hinv-rooms-table',
  standalone: true,
  imports: [CommonModule, RouterModule, FilterPipe],
  templateUrl: './rooms-table.component.html',
  styleUrl: './rooms-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsTableComponent implements OnChanges, OnDestroy {

  @Input() rooms: Room[] | null = [];
  @Input() filterPrice: number = 0;
  @Output() selectedRoom = new EventEmitter<Room>();

  selectRoom(room: Room){
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('change made:', changes['rooms']);
  }

  ngOnDestroy(): void {
    console.log('Rooms Component Destroyed')
  }


}
