import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
    employees: Employee[];

    constructor(private employeeService: EmployeeService,
      private router: Router){

    }

    ngOnInit(): void{
      this.getEmployees();
    }

    private getEmployees(){
      //performs asynchronous call to empl service, set employees property when data received
      this.employeeService.getEmployeesList().subscribe(data => {
        this.employees = data;
        console.log("getEmployees response: " + data);
      } );
    }

    updateEmployee(id: number){
      this.router.navigate(['update-employee',id]);
    }

    deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log(data);
        this.getEmployees();
      } );
    }

    viewEmployee(id: number){
      this.router.navigate(['employee-details',id]);
    }

}
