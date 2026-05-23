import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FinishedProcessComponent } from 'src/app/shared/components/finished-process/finished-process.component';

export type RegisterStep = 'personal' | 'address' | 'success';

export interface RegisterFormData {
  personal: Record<string, unknown>;
  address: Record<string, unknown>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinishedProcessComponent,
  ],
})
export class RegisterComponent implements OnInit {
  @Output() stepChange = new EventEmitter<RegisterStep>();
  @Output() onRegister = new EventEmitter<RegisterFormData>();
  @Output() onBackToLogin = new EventEmitter<void>();

  public formRegisterStep: RegisterStep = 'personal';
  public formRegister!: FormGroup;
  public addressForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });

    this.addressForm = this.fb.group({
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      complement: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.emitStepChange();
  }

  public nextStep() {
    this.setStep('address');
  }

  public previousStep() {
    this.setStep('personal');
  }

  public onSubmitRegister() {
    // if (this.addressForm.invalid) {
    //   this.addressForm.markAllAsTouched();
    //   return;
    // }

    this.onRegister.emit({
      personal: this.formRegister.value,
      address: this.addressForm.value,
    });

    // TODO: Implementar requisição de registro; se der ok, setar para success
    this.setStep('success');
  }

  public handleBackToLogin() {
    this.onBackToLogin.emit();
  }

  private setStep(step: RegisterStep) {
    this.formRegisterStep = step;
    this.emitStepChange();
  }

  private emitStepChange() {
    this.stepChange.emit(this.formRegisterStep);
  }
}
