import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import {
  RegisterComponent,
  RegisterFormData,
  RegisterStep,
} from './register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, LoginComponent, RegisterComponent],
})
export class AuthPage implements OnInit {
  public action: 'login' | 'register' = 'login';
  public registerStep: RegisterStep = 'personal';

  constructor(private readonly alertController: AlertController) {}

  ngOnInit() {}

  public toggleAction(action: 'login' | 'register') {
    if (this.action === 'register' && this.registerStep !== 'success') {
      this.showAlert(action);
    } else {
      this.action = action;
      this.registerStep = 'personal';
    }
  }

  public async showAlert(action: 'login' | 'register') {
    const alert = await this.alertController.create({
      subHeader: 'Retornar ao login?',
      message: 'Todos os dados inseridos serão perdidos.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.action = action;
            this.registerStep = 'personal';
          },
        },
      ],
    });
    await alert.present();
  }

  public onRegisterStepChange(step: RegisterStep) {
    this.registerStep = step;
  }

  public onLogin(event: unknown) {
    console.log(event);
    console.log('login');
  }

  public onRegister(data: RegisterFormData) {
    console.log(data);
    console.log('register');
  }

  public onRegisterBackToLogin() {
    this.toggleAction('login');
  }
}
