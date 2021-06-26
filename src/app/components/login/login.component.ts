import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public fb: FormBuilder,public router:Router) {}

  loading = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  get getControl() {
    return this.loginForm.controls;
  }
  onSubmit() {
    console.log(this.loginForm.value);
    if(!this.loginForm.valid){
return;
    }
    this.loading = true;
if(this.loginForm.valid){
  localStorage.setItem('token', "mahhddhgudieduiutsgaytyufgfgfdefgerfgghdsg");
  setTimeout(() => {
    this.router.navigate(['/home']);
    this.loginForm.reset();
  }, 3000);
}

  }




}
