import { Component } from '@angular/core';
import { EmployeeService } from './employees/employee.service';

@Component({
    selector: `child2`,
    template:` {{result2}}
    <button (click)="change()">new</button>
    `
})
export class SecondComponent {
    result2:string;
    constructor( private data:EmployeeService){}
    ngOnInit(){ 
        this.data.newsubject.subscribe(result => this.result2 = result)
    }
    change(){
        this.data.getdata("heello")
    }
}