import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  loading = false;

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
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
    return this.registerForm.controls;
  }

  onRegister() {
    if(!this.registerForm.valid){
      return;
    }
    this.loading = true;
    if (this.registerForm.valid) {
      setTimeout(() => {
        this.router.navigate(['/']);
        this.registerForm.reset();
      }, 3000);
    }

  }


}
