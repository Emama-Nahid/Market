import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Auth: any;

  constructor(private loginService: LoginService, 
    private snackBar:MatSnackBarModule) { }

  ngOnInit(): void {
  }

  onLoginSubmit(values: any) {
    this.loginService.doLogin(values).subscribe((r:any) => {
      localStorage.setItem('token', r.token);
    })
  }
}
