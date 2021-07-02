import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) { }
 
  ngOnInit(): void {
   
  }

}