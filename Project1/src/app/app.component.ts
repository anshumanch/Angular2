import { Component } from '@angular/core';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeComponent]
})
export class AppComponent {
  title = 'app works!';
  countClicks = 0;
  employees: EmployeeComponent[] = [];

    constructor(){
        var emp1 = new EmployeeComponent();
        emp1.name = "Anshuman";
        emp1.task = "POC";
        emp1.hours = 10;
        this.employees.push(emp1);

        var emp2 = new EmployeeComponent();
        emp2.name = "Arpita";
        emp2.task = "Development";
        emp2.hours = 20;
        this.employees.push(emp2);

        var emp3 = new EmployeeComponent();
        emp3.name = "Aryan";
        emp3.task = "Testing";
        emp3.hours = 15;
        this.employees.push(emp3);

        var emp4 = new EmployeeComponent();
        emp4.name = "Manjula";
        emp4.task = "Deployment";
        emp4.hours = 10;
        this.employees.push(emp4);
    }

  increaseCountClicks(){
    this.countClicks++;
  }
}
