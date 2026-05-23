import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    IonIcon,
  ]
})
export class LoginComponent  implements OnInit {
  @Output() onLogin = new EventEmitter<void>();
  @Output() onForgotPassword = new EventEmitter<void>();
  
  public formLogin!: FormGroup;
  public passwordVisible: boolean = false;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  public togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  public onSubmit() {
    if (this.formLogin.valid) {
      this.onLogin.emit(this.formLogin.value);
    }
  }

}
