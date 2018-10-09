import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list-services-v17",
  template: `
    <h2 [style.textAlign]="'center'">{{name}}</h2>
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ["./employee-list-services-v17.component.css"]
})
export class EmployeeListServicesV17Component implements OnInit {
  public name = "Learnign services part!";
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
