import { Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { bookingGuard } from '../guards/booking.guard';

export const bookingsRoutes: Routes = [
    {path: ':roomId', component: BookingsComponent, canDeactivate: [bookingGuard]},
];