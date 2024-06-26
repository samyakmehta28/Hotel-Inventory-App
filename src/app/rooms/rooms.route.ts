import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { roomsGuard } from './guards/rooms.guard';

export const roomRoutes: Routes = [
    // on routing to rooms/:roomid, RoomBookingComponent will be loaded in the router-outlet of RoomsComponent,
    //hence it will load on the same page as RoomsComponent (below the table) => this is called nested routing
    {path: '', component: RoomsComponent, canActivateChild: [roomsGuard], children: [{path: 'add', component: AddRoomComponent}]},
    //{path: '**', component: NotFoundComponent}
    //default route (can make a home page as default route)
];