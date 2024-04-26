import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{

  employee: Employee = new Employee();
  id: number;
  
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {}

  //pre-fill form with employee data from employee id in url
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.employee = data;
        },
        error: (err) => console.log(err)
      }
    );
  }

  gotoList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.employee = new Employee();
          this.gotoList();
        },
        error: (err) => console.log(err)
      }
    );
  }

}
