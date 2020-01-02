import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employees/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child.component';
import { SecondComponent } from './secon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,ChildComponent,SecondComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
