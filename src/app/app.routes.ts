import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { canMatchGuard, loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path: 'employee', component: EmployeeComponent, canActivate: [loginGuard]},
    //{path: 'rooms', component: RoomsComponent},
    {path: 'login', component: LoginComponent},
    
    //lazy loading of rooms component
    {path: 'rooms', loadChildren: () => import('./rooms/rooms.route').then(m => m.roomRoutes), 
        canActivate: [loginGuard], canMatch: [canMatchGuard], 
        pathMatch: 'prefix'},

    {path: 'bookings', loadChildren: () => import('./bookings/bookings.route').then(m => m.bookingsRoutes), 
        //canActivate: [loginGuard]
    },

    {path: 'comments', loadChildren: () => import('./comments/comments.route').then(m => m.commentsRoutes), 
        //canActivate: [loginGuard]
    },

    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
