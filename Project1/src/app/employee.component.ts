import { Component } from "@angular/core";

@Component({
    selector: 'emp',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent {
    title = "Employees Table";

    name: string;
    task: string;
    hours: number;

}