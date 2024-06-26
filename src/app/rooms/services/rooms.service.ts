import { Injectable, Inject } from '@angular/core';
import { Room } from '../rooms_details';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList:Room[]= [];

  //should cache but for some reason not working
  //headers = new HttpHeaders({token: '12345fhvffnkjv'});
  getAllRooms$:Observable<Room[]> = this.http.get<Room[]>('/api/rooms').pipe(
    tap(data => console.log('Data:', data)),
    shareReplay(1)
  )

//instead of getting the apiEndpoint from the env file, we use a APP_CONFIG setup to get the apiEndpoint globally, using Inject
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    console.log(config.apiEndpoint);
  }

  //RxJs makes you subscribe to data, which means that
  // if data is changed in backend, the frontend will be updated automatically
  getAllRooms(): Observable<Room[]>{
    //return this.http.get('/api/rooms')
    return this.http.get<Room[]>('/api/rooms')
  }

  addSingleRoom(room: Room): Observable<Room[]>{
    return this.http.post<Room[]>('/api/rooms', room)
  }

  updateSingleRoom(room: Room): Observable<Room[]>{
    return this.http.put<Room[]>(`/api/rooms/${room.roomNumber}`, room)
  }

  deleteSingleRoom(id:string): Observable<Room[]>{
    return this.http.delete<Room[]>(`/api/rooms/${id}`)
  }

  getPhotos(){
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
