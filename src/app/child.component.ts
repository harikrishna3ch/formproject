import { Component, Input, Output,EventEmitter } from '@angular/core';
import { EmployeeService } from './employees/employee.service';


@Component({
    selector: `child`,
    template:` {{uname}}{{result1}}
    <button (click)="incre()">increment</button>
<button (click)="decre()">decrement</button>
    <br>
    <button (click)="pass()">pass</button>`
})
export class ChildComponent {
    public age:any = 20;
    public employee = [];
    public count =4;
    public errmsg;
    public result1:string;
    constructor(private empService:EmployeeService){}
    ngOnInit(){
        this.empService.getEmployee().subscribe(
            result => this.employee = result,
            error => this.errmsg = error
            
        )
        this.empService.newsubject.subscribe(
            result => this.result1 = result
        )
    }
    
@Input() uname:string;
@Output() notify:EventEmitter<number> = new EventEmitter<number>();
incre(){    
    this.count++;
    this.notify.emit(this.count);
}
decre(){    
    this.count--;
    this.notify.emit(this.count);
}
}
