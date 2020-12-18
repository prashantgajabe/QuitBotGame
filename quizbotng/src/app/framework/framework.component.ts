import { Component, OnInit } from '@angular/core';
import {NgxEncryptCookieService} from 'ngx-encrypt-cookie';
import { Userprogress } from '../userprogress';
import { UserprogressSerService } from '../userprogress-ser.service';
import { Userbase } from '../userbase';
import { UserbaseSerService } from '../userbase-ser.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

  constructor(private userbaseService: UserbaseSerService, private userprogressService: UserprogressSerService, private router: Router, private cookie:NgxEncryptCookieService, private ngzone: NgZone) { }

  usernamecookie: String;
  passcookie: String;
  keycookie: String;

  public userbase: Userbase={
      IdUser: null,
      Username: '',
      UserPassword: '',
      UserEmail: '',
      UserPhoneNumber: null,
      UserAge: null
  }
  public userprogress: Userprogress={
    Userbase_IdUser:0,
    PicWordDB_PicWordID:0,
    PicWordDB_PicDone:0,
    MathRiddles_idMathRiddle:0,
    MathRiddle_Done:0,
    Quiz_idQuiz:0,
    Quiz_QuizDone:0,
    UserCoins:0,
    UserLevel:0
  }



  ngOnInit(): void {
    if(this.cookie.get("user", false)==''){
      setTimeout(()=>{
        $('#username_head').attr("href", "/login");
      }, 300);
    } else{
      this.usernamecookie = this.cookie.get("user", false);
      this.keycookie = this.cookie.get(this.usernamecookie+'k', false);
      this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
      this.userbaseService.getUserbyUserName(this.usernamecookie)
      .then((userbase: Userbase)=>{
        this.userbase = userbase});
        setTimeout(()=>{
          this.userprogressService.getUserProgress(this.userbase.IdUser)
          .then((userprogress: Userprogress)=>{
            this.userprogress = userprogress;
          });
          setTimeout(()=>{
            $('#username_head').attr("href", "/profile");
            $('#username_head').text(this.userbase.Username);
            $('#coin_head').text(this.userprogress.UserCoins);
            $('#level_head').text("Level: "+this.userprogress.UserLevel);
          },300);
        },300);
      }
    }
    homeclick():void{
    this.router.navigate(['/']);

  }

}
