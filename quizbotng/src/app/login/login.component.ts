import { Component, OnInit, NgZone, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Userbase } from '../userbase';
import { FormGroup, FormControl, FormsModule, FormBuilder, Validators,  ReactiveFormsModule } from '@angular/forms';
import { UserbaseSerService } from '../userbase-ser.service';
import { CookieService } from 'ngx-cookie-service';
import {NgxEncryptCookieService} from 'ngx-encrypt-cookie';
import { forbiddenNameValidator } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgxEncryptCookieService]
})
export class LoginComponent implements OnInit {
  currentUser: Userbase;
  loginForm: FormGroup;
  constructor(private userbaseService: UserbaseSerService, private router: Router, private ngZone: NgZone, private cookie:NgxEncryptCookieService, loginFormBuilder: FormBuilder) { 
    this.loginForm = loginFormBuilder.group({
      Username: ['', Validators.required, Validators.minLength[4], forbiddenNameValidator(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)],
      Password: ''
    });
  }


  ngOnInit(): void {
  }
  singupbtn(): void{
    this.router.navigate(['/signup']);
  }
  public loginAcc(loginForm){
    this.userbaseService.getUserbyUserName(loginForm.Username)
    .then((userbase: Userbase)=>{
      this.currentUser = userbase});
      setTimeout(()=>{
        if (loginForm.Password === this.currentUser.UserPassword) {
        var key = this.cookie.generateKey();
        console.log(key);
        this.cookie.set(loginForm.Username, loginForm.Password, true, key, 2);
        this.cookie.set(loginForm.Username+"k", key, false);
        this.cookie.set("user",loginForm.Username, false);
        this.router.navigate(['/']);
      }}, 500);
  }

}
