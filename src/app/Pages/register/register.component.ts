import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  
  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
   
  }
  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
        return;
    }
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
}

}


// let data = {
//   "firstName": this.f.firstName.value,
//   "lastName":this.f.lastName.value,
//   "email":this.f.email.value,
//   "password":this.f.password.value
// }
// this.service.registration(data).subscribe(data => {
//   console.log(data);
//   this.snackBar.open("Registration Successful","Exit")
// })