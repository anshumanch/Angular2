import { Component } from '@angular/core';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeComponent]
})
export class AppComponent {
  title = 'Angular2 Works!';
  countClicks = 0;
  nameVal = '';
  taskVal = '';
  hoursVal = '';
  selectAllEmployees: boolean = false;
  sourceEmployees: EmployeeComponent[] = [];
  destinationEmployees: EmployeeComponent[] = [];

  constructor() {
    var emp1 = new EmployeeComponent();
    emp1.name = "Anshuman";
    emp1.task = "POC";
    emp1.hours = 10;
    this.sourceEmployees.push(emp1);

    var emp2 = new EmployeeComponent();
    emp2.name = "Arpita";
    emp2.task = "Development";
    emp2.hours = 20;
    this.sourceEmployees.push(emp2);

    var emp3 = new EmployeeComponent();
    emp3.name = "Aryan";
    emp3.task = "Testing";
    emp3.hours = 15;
    this.sourceEmployees.push(emp3);

    var emp4 = new EmployeeComponent();
    emp4.name = "Manjula";
    emp4.task = "Deployment";
    emp4.hours = 10;
    this.sourceEmployees.push(emp4);
  }

  increaseCountClicks() {
    this.countClicks++;
  }

  setEmployeeSelected() {
    this.removeAllDestinationRows();

    for (let employee of this.sourceEmployees) {
      if (employee.selected) {
        this.destinationEmployees.push(employee);
      }
    }
  }

  transferSelectedData() {
    this.removeAllDestinationRows();
    for (let employee of this.sourceEmployees) {
      if (employee.selected) {
        this.destinationEmployees.push(employee);
      }
    }
  }

  filterRows() {
    this.hideAllSourceRows();

    if (this.nameVal.length > 0 && this.taskVal.length > 0 && this.hoursVal.length > 0) {
      for (let employee of this.sourceEmployees) {
        if (employee.name.includes(this.nameVal)) {
          if (employee.task.includes(this.taskVal)) {
            if (employee.hours.toString().includes(this.hoursVal)) {
              employee.visible = true;
            }
          }
        }
      }
    }
    else if (this.nameVal.length > 0 && this.taskVal.length > 0) {
      for (let employee of this.sourceEmployees) {
        if (employee.name.includes(this.nameVal)) {
          if (employee.task.includes(this.taskVal)) {
            employee.visible = true;
          }
        }
      }
    }
    else if (this.taskVal.length > 0 && this.hoursVal.length > 0) {
      for (let employee of this.sourceEmployees) {
        if (employee.task.includes(this.taskVal)) {
          if (employee.hours.toString().includes(this.hoursVal)) {
            employee.visible = true;
          }
        }
      }
    }
    else if (this.nameVal.length > 0 && this.hoursVal.length > 0) {
      for (let employee of this.sourceEmployees) {
        if (employee.name.includes(this.nameVal)) {
          if (employee.hours.toString().includes(this.hoursVal)) {
            employee.visible = true;
          }
        }
      }
    }
    else if (this.nameVal.length > 0) {
      for (let employee of this.sourceEmployees) {
        if (employee.name.includes(this.nameVal)) {
          employee.visible = true;
        }
      }
    }
    else if (this.taskVal.length > 0) {
      for (let employee of this.sourceEmployees) {
        if (employee.task.includes(this.taskVal)) {
          employee.visible = true;
        }
      }
    }
    else if (this.hoursVal.length > 0) {
      for (let employee of this.sourceEmployees) {
        if (employee.hours.toString().includes(this.hoursVal)) {
          employee.visible = true;
        }
      }
    }
    else {
      for (let employee of this.sourceEmployees) {
        employee.visible = true;
      }
      this.selectAllEmployees = false;
    }
  }

  toggleSelectAllRows() {
    for (let employee of this.sourceEmployees) {
      if (employee.visible) {
        employee.selected = this.selectAllEmployees;
      }
      this.setEmployeeSelected();
    }
  }

  hideAllSourceRows() {
    for (let employee of this.sourceEmployees) {
      employee.visible = false;
    }
  }

  removeAllDestinationRows() {
    this.destinationEmployees = [];
  }
}




