import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HTTPUserService } from 'src/app/Service/httpuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  submitted = false;
  myForm = new FormGroup({
    firstName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
   
  })
  constructor(private formBuilder: FormBuilder,private userService:HTTPUserService) { }

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
