import { Component, ContentChild } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements AfterContentInit{

  // ViewChild helps in viewing or manipulating child component properties, 
  //whereas Content child helps in  is used to interact with content that is projected from a parent into a child component.
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngAfterContentInit(): void {
    console.log('Employee Name:', this.employee.empName);
    this.employee.empName = 'Samyak Mehta';
  }
}
