import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  {
  submitted = false;
  myForm = new FormGroup({
    email:new FormControl('',Validators.required)
  })
  constructor() { }

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
