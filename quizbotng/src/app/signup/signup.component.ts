import { IfStmt } from '@angular/compiler';
import { Component, OnInit, NgZone, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Userbase } from '../userbase';
import { UserbaseSerService } from '../userbase-ser.service';
import { forbiddenNameValidator } from '../app.module';
import { isNullOrUndefined } from 'util';
import { CookieService } from 'ngx-cookie-service';
import {NgxEncryptCookieService} from 'ngx-encrypt-cookie';
import { FormGroup, FormControl, FormsModule, FormBuilder, Validators,  ReactiveFormsModule } from '@angular/forms';
import { Userprogress } from '../userprogress';
import { UserprogressSerService } from '../userprogress-ser.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserbaseSerService, NgxEncryptCookieService]
})
export class SignupComponent implements OnInit {
  title:"Create User";
  currentUser: Userbase;
  signupForm = new FormGroup({
    Username: new FormControl,
    UserPassword: new FormControl,
    UserEmail: new FormControl,
    UserPhoneNumber: new FormControl,
    UserAge: new FormControl
  });
  checkr: Boolean;
  UserPhoneNumber: String;
  constructor(private userbaseService: UserbaseSerService, private userprogressService: UserprogressSerService, private router: Router, private cookie:NgxEncryptCookieService, private ngzone: NgZone, private signupFormBuilder: FormBuilder) {
  }
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

    if(this.cookie.get("user", false)!=''){
      setTimeout(()=>{
        this.router.navigate(['/']);
      }, 500);
    } else{
      this.signupForm = this.signupFormBuilder.group({
        Username: new FormControl (this.userbase.Username, [
          Validators.required, 
          Validators.minLength(4),
          Validators.pattern("^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")
          ]),
        UserPassword: new FormControl (this.userbase.UserPassword, [
          Validators.required, Validators.minLength(8)
          ]),
        UserEmail: new FormControl (this.userbase.UserEmail, [
          Validators.required, Validators.email
          ]),
        UserPhoneNumber: new FormControl(this.userbase.UserPhoneNumber, [
          Validators.required,
          Validators.pattern("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")
        ]),
        UserAge: new FormControl (this.userbase.UserAge, [
          Validators.required,
          Validators.pattern("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$")
        ])
      });
    }
  }
  public CreateUser(userbase: Userbase): void{
    this.userbaseService.createUser(userbase)
    .then ((createdUser: Userbase) => {
      this.ngzone.run(()=>{
        // this.router.navigate(['/']);
      })
    })
  }
  public CreateUserprogress(userprogress: Userprogress): void{
    this.userprogressService.createUserProgress(userprogress)
    .then ((createdUser: Userprogress) => {
      this.ngzone.run(()=>{
        this.router.navigate(['/']);
      })
    })
  }
  public Validation(signupForm): void{
    this.checkr=true;
    // this.Username=signupForm.value.Username;
    // this.UserPassword=signupForm.value.UserPassword;
    // this.UserEmail=signupForm.value.UserEmail;
    this.UserPhoneNumber=signupForm.value.UserPhoneNumber;
    // this.UserAge=signupForm.value.UserAge;
    if(RegExp("^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$").test(signupForm.value.Username)){
      this.userbase.Username = signupForm.value.Username;
    } else {
      alert("incorrect username values!");
      this.checkr=false;
    }
    if(signupForm.value.UserPassword.length>=8){
      this.userbase.UserPassword = signupForm.value.UserPassword;
    } else {
      alert("Invalid entries in password!");
      this.checkr=false;
    }
    if(RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$").test(signupForm.value.UserEmail)){
      this.userbase.UserEmail = signupForm.value.UserEmail;
    } else {
      alert("Invalid Entries for Email!");
      this.checkr=false;
    }
    if(RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$").test(signupForm.value.UserPhoneNumber)){
      this.UserPhoneNumber = this.UserPhoneNumber.replace(/[\D]/g, '');
      this.userbase.UserPhoneNumber = Number(this.UserPhoneNumber);
    } else {
      alert("Invalid Entries for Phone Number!");
      this.checkr=false;
    }
    if(RegExp("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$").test(signupForm.value.UserAge)){
      this.userbase.UserAge = signupForm.value.UserAge;
    } else {
      alert("Invalid Entries for Age!");
      this.checkr=false;
    }
    if(this.checkr == true){
      var key = this.cookie.generateKey();
      console.log(key);
      this.CreateUser(this.userbase);
      signupForm.reset();
      setTimeout(() => {
        this.userbaseService.getUserbyUserName(this.userbase.Username)
        .then((userbase: Userbase)=>{
          this.userbase = userbase});
          setTimeout(()=>{
            alert(this.userbase.IdUser);
            this.userprogress.Userbase_IdUser=this.userbase.IdUser;
            this.CreateUserprogress(this.userprogress);
            this.cookie.set("user",this.userbase.Username, false);
            this.cookie.set(this.userbase.Username, this.userbase.UserPassword, true, key, 2);
            this.cookie.set(this.userbase.Username+"-k", key, false);
          }, 300);
      }, 300);

    } else{
      alert("Something went wrong!");
    }
    
  }
  

}
