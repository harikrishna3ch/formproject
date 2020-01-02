import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees=[];
  public errmsg;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(
      result =>this.employees = result,
      error =>this.errmsg = error      
      
    )
  }
  
 
}
