import { Component, Output } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // userForm: any;
  // constructor(private formBuilder: FormBuilder){}
  // ngOnInit(){
  //   this.userForm = this.formBuilder.group({
  //     name:['hari', Validators.required, Validators.minLength(4)],
  //     street:[],
  //     address: this.formBuilder.group({
  //       street:[],
  //       postalcode:[]

  //     })
  //   })
  // }
  
  userForm = new FormGroup({
    name: new FormControl('hari',[Validators.required,Validators.minLength(4)]),
    contact: new FormControl(),
    
    address: new FormGroup({
      street: new FormControl(),
      
      postalcode: new FormControl(),     
  })
});


onsubmit(){
  console.log(this.userForm.value)
}
}

