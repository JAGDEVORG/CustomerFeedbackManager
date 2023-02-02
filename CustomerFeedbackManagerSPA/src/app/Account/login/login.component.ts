import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptionDecryptionService } from '../../Service/encryption-decryption.service';
import { customValidator } from '../../Shared/customValidation'
import { loginComponentMessages } from '../../Shared/ValidationMessages/loginComponentMessages'
import { ILoginList } from './loginList';
import { HttpServiceService } from '../../Service/http-service.service';
import { debounce, first } from 'rxjs';
import { AuthServiceService } from '../../Service/auth-service.service';
import { TokenRequest } from '../../Models/token-request';

{
  AuthServiceService
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  loginForm: any;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _validator: customValidator,
    private _validatorMessage: loginComponentMessages,
    private encryptiondecription: EncryptionDecryptionService,
    private _httpServiceService: HttpServiceService,
    private authService: AuthServiceService,
    private route: ActivatedRoute,) { }

  //Variable Decleartion
  isScan: boolean = false;
  formLogin: FormGroup;
  formErrors: any = {};
  apiName = "UserAuth";
  showPassword: boolean = true;
  invalidCredentials = false;
  parsedLoginJson: any;
  ngOnInit(): void {
    this.returnUrl = '/dashboard/chart';
    this.buildForm();
  }

  // initialize the form 
  public buildForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this._validator.regex.email)]],
      password: ['', [Validators.required, this._validator.passwordStrengthValidator]],
    });

    this.formLogin.valueChanges.subscribe((data) => {
      this.formErrors = this._validator.getValidationErrors(this.formLogin, this._validatorMessage.validationMessages, true)
    });
  }

  // for show and hide the password
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  loginViaScan() {
    this.isScan = true;
  }
  navigateToLogin() {
    this.isScan = false;
  }

  // insert 
  insertLoginDetail() {


    this._validator.markFormGroupTouched(this.formLogin);
    if (this.formLogin.valid) {
      let loginList: ILoginList = {
        UserName: this.formLogin.controls['email'].value,
        // Password: this.encryptiondecription.encrypt(this.formLogin.controls['password'].value).toString(),
        Email: this.formLogin.controls['email'].value,
        Password: this.formLogin.controls['password'].value,
        Id: 1,
        Enabled: true,
      }
      this._httpServiceService.post(loginList, this.apiName).subscribe(response => {
        if (response.isSuccess == true) {
          this.invalidCredentials = false;
          this.parsedLoginJson = JSON.parse(response.content);
          this.router.navigate(['dashboard/customer']);
          // redirect on dashboard
          this.parsedLoginJson = JSON.parse(response.content);  
          let tokenRequest : TokenRequest = {
            UserId : this.parsedLoginJson.Id,
            UserName: loginList.UserName,
            Password:loginList.Password,
            Role: "Admin"
          };
          this.authService.getJWTAuthToken(tokenRequest); 
        }
        else {
          this.invalidCredentials = true;
        }

      })
    }
    else {
      this.formErrors = this._validator.getValidationErrors(this.formLogin, this._validatorMessage.validationMessages, false)
    }
  }


  // onSubmit() {


  //   const infoUser = {
  //     email: this.formLogin.controls['email'].value,
  //     password: this.formLogin.controls['password'].value
  //   }

  //   this.submitted = true;
  //   this.loading = true;
  //   if (this.formLogin.valid) {
  //     this.authService.login(infoUser)
  //       .pipe(first())
  //       .subscribe(
  //         data => {
  //           if (data.role == 'Admin') {
  //             this.router.navigate(['dashboard/cust']);
  //           }
  //           else {
  //             this.router.navigate([this.returnUrl
  //             ]);
  //           }

  //         })
  //   }
  // }
}
