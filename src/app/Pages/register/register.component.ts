import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/Service/http.service';
import { HTTPUserService } from 'src/app/Service/httpuser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  submitted = false;
  myForm = new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required)
  })
  //  HTTPUserService = new HTTPUserService(HttpService);
  
  constructor(private formBuilder: FormBuilder) { }
 get f() { return this.myForm.controls; }
  ngOnInit(): void {
   
  }
  onSubmit() {
    let data = {
      "firstName": this.f.firstName.value,
      "lastName":this.f.lastName.value,
      "email":this.f.email.value,
      "password":this.f.password.value
    }
    // this.userService.registration(data).subscribe(data => {
    //   console.log(data);
    // });
}
}