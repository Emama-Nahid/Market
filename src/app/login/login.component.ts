import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Auth: any;

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(event: { preventDefault: () => void; target: any; }) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username,password)
    console.log(event)
  }

}
