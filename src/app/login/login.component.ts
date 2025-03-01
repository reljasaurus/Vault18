import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nekiDrugiString = '';
  public korisnikUlogiran = true;

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    

    //this.Auth.getUserDetails(username, password)
    //console.log(username, password)
  }

  dohvatiStringIzServisa(){
    //debugger;
    this.nekiDrugiString = this.Auth.nekiString;
  }

}
