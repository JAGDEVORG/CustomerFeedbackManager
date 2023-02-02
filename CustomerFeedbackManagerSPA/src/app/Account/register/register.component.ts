import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncryptionDecryptionService } from 'src/app/Service/encryption-decryption.service';
import { customValidator } from '../../Shared/customValidation'
import { reisterComponentMessages } from '../../Shared/ValidationMessages/registerComponentMessage'
import { IRegisterList } from './registerList';
import { HttpServiceService } from '../../Service/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _validator: customValidator,
    private _validatorMessage: reisterComponentMessages,
    private encryptiondecription: EncryptionDecryptionService,
    private _httpServiceService: HttpServiceService) { }

  formRegister: FormGroup;
  formErrors: any = {};
  showPassword: boolean = false;

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm() {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this._validator.regex.email)]],
      password: ['', [Validators.required, , this._validator.passwordStrengthValidator]],
    });

    this.formRegister.valueChanges.subscribe((data) => {
      this.formErrors = this._validator.getValidationErrors(this.formRegister, this._validatorMessage.validationMessages, true)
    });
  }

  // Insert method
  insertRegisterDetail() {
    this._validator.markFormGroupTouched(this.formRegister);
    if (this.formRegister.valid) {
      let registerList: IRegisterList = {
        Name: this.formRegister.controls['name'].value,
        Email: this.formRegister.controls['email'].value,
        Password: this.encryptiondecription.encrypt(this.formRegister.controls['password'].value).toString(),
      }
      this._httpServiceService.post(registerList, 'apiName').subscribe(response => {
        console.log(response);
      })
    }
    else {
      this.formErrors = this._validator.getValidationErrors(this.formRegister, this._validatorMessage.validationMessages, false)
    }
  }

}
