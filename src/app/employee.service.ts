import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor() {}

  getEmployees(){
    return [
      { id: 1, name: "Rahul", age: 25 },
      { id: 2, name: "Sonu", age: 20 },
      { id: 3, name: "Aaryan", age: 6 },
      { id: 4, name: "Sumit", age: 21 }
    ];
  }
}
