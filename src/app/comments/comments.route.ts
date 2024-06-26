import { Routes } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { commentsGuard } from '../guards/comments.guard';

export const commentsRoutes: Routes = [
    //{path: ':roomId', component: BookingsComponent, canDeactivate: [bookingGuard]},
    {path: '', component: CommentsComponent, resolve:{comments: commentsGuard}}
];