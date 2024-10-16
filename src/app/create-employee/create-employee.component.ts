import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToEmployeeList();
        },
        error: (err) => console.log(err)
      }
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  ngOnInit(): void {
    
  }
}
