import { CommentsService } from '../comments/comments.service';
import { ResolveFn } from '@angular/router';
import { commentDTO } from '../comments/commentDTO';
import { inject } from '@angular/core';

export const commentsGuard: ResolveFn<commentDTO[]> = () => {
  const commentsService = inject(CommentsService); 
  return commentsService.getComments();
};
