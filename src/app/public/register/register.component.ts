import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.min(999999999),
      Validators.max(999999999),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
  });

  getMinLengthErrorMessage(element: string, numOfCharacters: number) {
    if (this.registerForm.get(element)?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerForm.get(element)?.hasError('minlength')
      ? `Must have a minimun of ${numOfCharacters} characters`
      : '';
  }

  getPhoneErrorMessage() {
    if (this.registerForm.get('phone')?.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.registerForm.get('phone')?.hasError('max')) {
        return 'Must have 9 characters'
    }
    return this.registerForm.get('phone')?.hasError('min')
      ? 'Must have 9 characters'
      : '';
  }

  getEmailErrorMessage() {
    if (this.registerForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPasswordErrorMessage() {
    if (this.registerForm.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerForm.get('password')?.hasError('minlength')
      ? 'Must have a minimun of 7 characters'
      : '';
  }

  passwordMatchValidator() {
    return this.registerForm.get('password')?.value ===
      this.registerForm.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  constructor() {}

  ngOnInit(): void {}
}
