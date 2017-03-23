import { Component } from "@angular/core";

@Component({
    selector: 'emp',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent {
    name: string;
    task: string;
    hours: number;
    visible: boolean = true;
    selected: boolean = false;

    getEmployeeSelected(){
    return this.selected;
  }

}