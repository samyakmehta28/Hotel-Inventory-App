import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commentDTO } from './commentDTO';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get<commentDTO[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
