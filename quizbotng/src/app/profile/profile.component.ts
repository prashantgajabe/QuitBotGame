import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxEncryptCookieService } from 'ngx-encrypt-cookie';
import { Userprogress } from '../userprogress';
import { UserprogressSerService } from '../userprogress-ser.service';
import { Userbase } from '../userbase';
import { UserbaseSerService } from '../userbase-ser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

  
  usernamecookie: String;
  passcookie: String;
  keycookie: String;
  riddledone: number;
  onload: boolean = false;
  nouser: boolean = false;

  constructor(private cookie:NgxEncryptCookieService, private userbaseService :UserbaseSerService, private userprogressService :UserprogressSerService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    if(this.cookie.get("user", false)==''){

    } else{
      this.usernamecookie = this.cookie.get("user", false);
      this.keycookie = this.cookie.get(this.usernamecookie.valueOf()+'k', false);
      this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
      this.userbaseService.getUserbyUserName(this.usernamecookie).then((userbase: Userbase)=>{this.userbase = userbase});
      setTimeout(()=>{
        // alert(this.usernamecookie);
        // alert(this.keycookie);
        if((this.userbase.Username == this.usernamecookie) && (this.userbase.UserPassword == this.passcookie)){
          
          this.userprogressService.getUserProgress(this.userprogress.Userbase_IdUser).then((userprogress: Userprogress)=>{this.userprogress = userprogress});
          setTimeout(()=>{
            this.onload = true;
            this.nouser = false;
          }, 200);
        } else{
          this.nouser = true;
        }
      }, 200);
    }
  }
  profileError(): void{
    this.router.navigate(['/login']);
  }

}
