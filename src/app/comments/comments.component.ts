import { CommentsService } from './comments.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  constructor(
    private commentsService: CommentsService,
    private route: ActivatedRoute
  ) { }

  //comments$ = this.commentsService.getComments();
  comments$ = this.route.data.pipe(map(data => data?.['comments']));
}
