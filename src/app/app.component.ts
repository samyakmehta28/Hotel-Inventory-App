import { Component, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit, AfterViewInit } from '@angular/core';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, AppNavComponent],
  templateUrl: './app.component.html',
  /*template: `<h1>welcome to hotel inventory app</h1>
  <p>Angular is Awesome</p>
  `,*/
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'hotelinventoryapp';
  role = 'admin';

  constructor(private initService: InitService,
    private route: Router
  ) {
    console.log(initService.config);
  }

  @ViewChild('user', {read: ViewContainerRef}) viewContainerRef!: ViewContainerRef;
  @ViewChild('HotelName', {static:true}) hotelName!: ElementRef;

  ngOnInit(){
    this.route.events.pipe(
      filter((event) => event instanceof NavigationStart)).subscribe((event) => {
        console.log("Navigation started");
    });

    this.route.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
        console.log("Navigation Ended");
    });

    //this.hotelName.nativeElement.innerHTML = 'Hilton Hotel';
  }

  ngAfterViewInit() {
    // places RoomsComponent at the #user tag and assigns the component to componentRef
    //can access any property of RoomsComponent by doing componentRef.instance.propertyName
    //View Container Ref is to be used in constructor  when you need to perform operations on the current view container of the component itself. 
    //const componentRef = this.viewContainerRef.createComponent(RoomsComponent);
    //componentRef.instance.roomsInfo.availableRooms = 100 //cannot do this since roomsInfo is initialized in ngOnInit and it messes up the lifecycle hooks.
  }
}
