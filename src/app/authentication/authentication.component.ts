import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  isLoginMode = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  passwordInputType: 'password' | 'text' = 'password';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility(): void {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
  }

  switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(): void {
    if (this.isLoginMode) {
      // Handle login logic here
      const loginData = this.loginForm.value;
      const storedRegisterData = localStorage.getItem('registerData');
      const registeredUser = storedRegisterData ? JSON.parse(storedRegisterData) : null;

      if (registeredUser &&
        registeredUser.username === loginData.username &&
        registeredUser.password === loginData.password) {
        // Navigate to home if login data matches registered data
        this.router.navigate(['/home']);
      } else {
        // Show error message if login fails
        alert('Invalid username or password.');
      }
    } else {
      // Handle registration logic here
      const registerData = this.registerForm.value;
      localStorage.setItem('registerData', JSON.stringify(registerData));

      // Navigate to home after successful registration
      this.router.navigate(['/home']);
    }
  }
}
