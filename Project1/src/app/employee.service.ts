
export class EmployeeService{
    getEmployeeDetails() : {name: string, task: string, hours: number, selected: boolean, visible: boolean}[] {
        return [
            {'name':'Keith', 'task':'POC', 'hours':10, 'selected':false, 'visible':true},
            {'name':'Peter', 'task':'Development', 'hours':20, 'selected':false, 'visible':true},
            {'name':'Rob', 'task':'Testing', 'hours':15, 'selected':false, 'visible':true},
            {'name':'Sam', 'task':'Deployment', 'hours':10, 'selected':false, 'visible':true},
            {'name':'Tom', 'task':'POC', 'hours':10, 'selected':false, 'visible':true},
            {'name':'Shelley', 'task':'Development', 'hours':20, 'selected':false, 'visible':true},
            {'name':'Will', 'task':'Testing', 'hours':15, 'selected':false, 'visible':true},
            {'name':'Sandra', 'task':'Deployment', 'hours':10, 'selected':false, 'visible':true},
        ]
    }
}