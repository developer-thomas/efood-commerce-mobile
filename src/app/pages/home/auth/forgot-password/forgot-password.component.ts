import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { FinishedProcessComponent } from 'src/app/shared/components/finished-process/finished-process.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonIcon,
    FinishedProcessComponent
  ]
})
export class ForgotPasswordComponent  implements OnInit {
  @Output() onForgotPassword = new EventEmitter<void>();
  @Output() onBackToLogin = new EventEmitter<void>();
  @Output() onResetPassword = new EventEmitter<void>();

  public formForgotPassword!: FormGroup;
  public formResetPassword!: FormGroup;
  public forgotPasswordStep: 'email' | 'options' | 'reset-password' | 'success' = 'email';
  
  public userEmail: string = 'example@example.com';
  public userPhone: string = '+55 (11) 99999-9999';

  public optionSelected: 'email' | 'sms' = 'email';

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.formForgotPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.formResetPassword = this.fb.group({
      token: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmNewPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  public sendEmail() {
    if (this.formForgotPassword.valid) {
      this.onForgotPassword.emit(this.formForgotPassword.value);
    }

    // TODO: Só vai pra essa options se o retorno do back para a verificação do email for true
    this.forgotPasswordStep = 'options';
  }

  public selectedDeviceToReceiveToken(device: 'email' | 'sms') {
    // TODO: Enviar essa seleção pro backend
    this.forgotPasswordStep = 'reset-password';
  }

  public resetPassword() {
    this.onResetPassword.emit(this.formResetPassword.value);
    // TODO: Só vai pra essa step se o retorno do back para a redefinição da senha for true
    this.forgotPasswordStep = 'success';
  }

}
