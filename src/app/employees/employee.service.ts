import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IEmployee } from '../employee';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private url = "assets/employee.json";
 private result:string;
  constructor(private http:HttpClient) { }

getEmployee():Observable<IEmployee[]>
{
 return this.http.get<IEmployee[]>(this.url);
}
 private mess = new BehaviorSubject("default");
newsubject = this.mess.asObservable();
getdata(x:string){
  this.mess.next(x);
}
}