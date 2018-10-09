import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail-services-v17',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}}.  age is {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail-services-v17.component.css']
})
export class EmployeeDetailServicesV17Component implements OnInit {

  public name = "Learnign services part!"
  public employees = []
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
