import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxEncryptCookieService } from 'ngx-encrypt-cookie';
import { Mathriddles } from '../mathriddles';
import { MathriddlesSerService } from '../mathriddles-ser.service';
import { Userprogress } from '../userprogress';
import { UserprogressSerService } from '../userprogress-ser.service';
import { Userbase } from '../userbase';
import { UserbaseSerService } from '../userbase-ser.service';

@Component({
  selector: 'app-math-play',
  templateUrl: './math-play.component.html',
  styleUrls: ['./math-play.component.css']
})
export class MathPlayComponent implements OnInit {

  currentRiddle : Mathriddles;
  idMathRiddle : number;
  answer : String = '';
  datafetched : boolean = false;
  isDataAvailable: boolean = false;
  uservalue: String[] = [];
  riddledata: Mathriddles;
  tempdata: Mathriddles;
  usernamecookie: String;
  passcookie: String;
  keycookie: String;
  riddledone: number;
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
  constructor( private mathriddleService : MathriddlesSerService, private cookie:NgxEncryptCookieService, private userbaseService :UserbaseSerService, private userprogressService :UserprogressSerService, private route : ActivatedRoute, private router : Router) { 
  }
  ngOnInit(): void {
    if(this.cookie.get("user", false)==''){
      this.route.params.subscribe(params => {
        this.idMathRiddle = params['idMathRiddle'];
        if(this.idMathRiddle == null){
          this.idMathRiddle = 1;
        }
        this.mathriddleService
        .getRiddle(this.idMathRiddle)
        .then((mathriddles: Mathriddles)=>{
          this.currentRiddle = mathriddles;
          // console.log(this.currentRiddle);
          this.isDataAvailable = true;
        });
        this.datafetched = false;
        setTimeout(() => {
          this.answer = this.currentRiddle.MathRiddleAnswer;
        }, 500);
      });
    } else{

      this.usernamecookie = this.cookie.get("user", false);
      this.keycookie = this.cookie.get(this.usernamecookie+'k', false);
      this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
      this.route.params.subscribe(params => {
        this.idMathRiddle = params['idMathRiddle'];

        this.userbaseService.getUserbyUserName(this.usernamecookie)
        .then((userbase: Userbase)=>{
          this.userbase = userbase;
        });
        setTimeout(()=>{
          this.userprogressService.getUserProgress(this.userbase.IdUser)
          .then((userprogress: Userprogress)=>{
            this.userprogress = userprogress;
          });
          setTimeout(()=>{
            this.idMathRiddle = this.userprogress.MathRiddles_idMathRiddle;
            this.riddledone = this.userprogress.MathRiddle_Done;
            if(this.idMathRiddle == null || this.idMathRiddle == 0){
              this.idMathRiddle = 1;
            } else if( this.idMathRiddle!=null || this.idMathRiddle != 0){
              if (this.riddledone == 1){
                this.mathriddleService
                .getNextRiddle(this.idMathRiddle)
                .then((riddles: Mathriddles)=>{
                  this.tempdata = riddles;
                });
                setTimeout(()=>{
                  this.idMathRiddle = this.tempdata.idMathRiddle;
                }, 200)
              }
            }
            this.mathriddleService
            .getRiddle(this.idMathRiddle)
            .then((mathriddles: Mathriddles)=>{
              this.currentRiddle = mathriddles;
              // console.log(this.currentRiddle);
              this.isDataAvailable = true;
            });
            this.datafetched = false;
            setTimeout(() => {
              this.answer = this.currentRiddle.MathRiddleAnswer;
            }, 500);
          }, 200);
        }, 300);



        
      });
    }
  }
  insertedvalue(value): void{
    $('#answerbox').val($('#answerbox').val()+value);
  }
  enterclick(): void{
    if($('#answerbox').val() != this.currentRiddle.MathRiddleAnswer){
      alert("Please Try Again!");
      $('#answerbox').val("");
    } else if($('#answerbox').val() == this.currentRiddle.MathRiddleAnswer){
      $('#answerbox').val("");

      this.userprogress.MathRiddles_idMathRiddle = this.idMathRiddle;
      this.userprogress.MathRiddle_Done = 1;
      this.userprogress.UserCoins = this.userprogress.UserCoins + 4;
      this.userprogressService.updateUserprogress(this.userbase.IdUser, this.userprogress);


      this.mathriddleService
      .getNextRiddle(this.currentRiddle.idMathRiddle)
      .then((riddles: Mathriddles)=>{
        this.riddledata = riddles;
        this.datafetched=true;
      });
      setTimeout(()=>{if(this.datafetched==true){
          this.isDataAvailable = false;
        this.router.navigateByUrl('/mathplay/'+this.riddledata.idMathRiddle);
      }}, 500);
    }
  }
  clearclick(): void{
    $('#answerbox').val("");
  }

}
