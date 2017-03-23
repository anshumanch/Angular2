import { Component } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeComponent, EmployeeService]
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

  constructor(empSrv:EmployeeService) {
    this.sourceEmployees =  <EmployeeComponent[]> empSrv.getEmployeeDetails();
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




