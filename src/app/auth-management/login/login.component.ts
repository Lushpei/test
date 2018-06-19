import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


class Data {
  userName: string;
  password: string;

  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userName: FormControl;
  // password: FormControl;
  // data: Data = {
  //   userName: '',
  //   password: ''
  // };
  isActiveFieldName: string;
  isActiveFieldPassword: string;
  isActiveBtn: string;
  userName: FormControl;
  password: FormControl;
  myform: FormGroup;

  isLoginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  changeStateFieldName(flag: string): void {
    if (this.userName.value !== '' && !!flag) {
      this.isActiveFieldName = flag;
    } else if (this.userName.value === '') {
      this.isActiveFieldName = flag;
    }

  }

  changeStateFieldPass(flag: string): void {
    if (this.userName.value !== '' && !!flag) {
      this.isActiveFieldPassword = flag;
    } else if (this.userName.value === '') {
      this.isActiveFieldPassword = flag;
    }
  }

  changeStateBtn(flag: string): void {
    this.isActiveBtn = flag;
  }




  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required
      // ,
      // Validators.minLength(8)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      userName: this.userName,
      password: this.password,
    });
  }

  onSubmit(form) {

    if (form.valid) {

      var loginModel = [{
        "Username": form.value.userName,
        "Password": form.value.password
      }]

      this.authService.Login(loginModel).subscribe((data: any) => {

        if (data.userId == null && data.tenantId == null) {
          this.isLoginError = true;
        }
        else {
          localStorage.setItem('UserId', data.userId);
          localStorage.setItem('TenantId', data.tenantId);
          this.router.navigate(['/']);
        }
      },
        (err: HttpErrorResponse) => {
          this.isLoginError = true;
        });
    }
  }

}

