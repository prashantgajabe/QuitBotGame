import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import anime from 'animejs/lib/anime.es'
import { NgxEncryptCookieService } from 'ngx-encrypt-cookie';

import { Picwordlist } from '../picwordlist';
import { PicwordlistSerService } from '../picwordlist-ser.service';
import { Picworddb } from '../Picworddb';
import { PicworddbSerService } from '../picworddb-ser.service';
import { stringify } from 'querystring';
import { Userprogress } from '../userprogress';
import { UserprogressSerService } from '../userprogress-ser.service';
import { Userbase } from '../userbase';
import { UserbaseSerService } from '../userbase-ser.service';
@Component({
  selector: 'app-picword-play',
  templateUrl: './picword-play.component.html',
  styleUrls: ['./picword-play.component.css']
})
export class PicwordPlayComponent implements OnInit {
  title: "Picword Play";
  currentPicword: Picworddb;
  currentPiclist: Picwordlist;
  picwordID: number;
  routeSub: Subscription;
  isDataAvailable:boolean = false;
  datafetched:boolean = false;
  picdata: Picworddb;
  answer: string[]; 
  randomstring: string[];
  filledwords: number = 0;
  letterids: number[]=[];
  usernamecookie: String;
  passcookie: String;
  keycookie: String;
  riddledone: number;
  picdone: number;
  tempdata: Picworddb;
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

  constructor(private picwordService : PicworddbSerService, private cookie:NgxEncryptCookieService, private userbaseService :UserbaseSerService, private userprogressService :UserprogressSerService, private piclistService : PicwordlistSerService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    if(this.cookie.get("user", false)==''){
      this.route.params.subscribe(params => {
        this.picwordID = params['PicWordID'];
        if(this.picwordID == null){
          this.picwordID = 2010203;
        }
        this.picwordService
        .getSinglePicQuiz(this.picwordID)
        .then((picwords: Picworddb)=>{
          this.currentPicword = picwords;
        });
        this.piclistService
        .getSinglePiclist(this.picwordID)
        .then((piclists: Picwordlist)=>{
          this.currentPiclist = piclists;
          this.isDataAvailable = true;
        });
        this.datafetched = false;
        setTimeout(() => {
          this.answer=Array.from(this.currentPicword.PicAnswer);
          this.randomstring = this.generateRandom(this.currentPicword.PicAnswer);
        }, 200);
      });
    } else{
      this.usernamecookie = this.cookie.get("user", false);
      this.keycookie = this.cookie.get(this.usernamecookie+'k', false);
      this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());

      this.route.params.subscribe(params => {
        this.picwordID = params['PicWordID'];
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
            this.picwordID = this.userprogress.PicWordDB_PicWordID;
            this.picdone = this.userprogress.PicWordDB_PicDone;
            if(this.picwordID == null || this.picwordID == 0){
              this.picwordID = 2010203;
            } else if (this.picwordID != null || this.picwordID != 0){
              if (this.picdone == 1){
                this.picwordService.getNextPicQuiz(this.picwordID)
                .then((picwodbdb: Picworddb)=>{
                  this.tempdata = picwodbdb;
                });
                setTimeout(()=>{
                  this.picwordID = this.tempdata.PicWordID;
                }, 200);
              }
            }
            this.picwordService
            .getSinglePicQuiz(this.picwordID)
            .then((picwords: Picworddb)=>{
              this.currentPicword = picwords;
            });
            this.piclistService
            .getSinglePiclist(this.picwordID)
            .then((piclists: Picwordlist)=>{
              this.currentPiclist = piclists;
              this.isDataAvailable = true;
            });
            this.datafetched = false;
            setTimeout(() => {
              this.answer=Array.from(this.currentPicword.PicAnswer);
              this.randomstring = this.generateRandom(this.currentPicword.PicAnswer);
            }, 200);
          }, 200);
        }, 200);
      });
    }





  }
  generateRandom(word) :string[]{
    var length = word.length;
    let final : string[];
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result = word + result;
    final = Array.from(result);
    final = final.sort(() => Math.random() - 0.5);
    return final;
  }
  deleteletter(): void{
    if(this.filledwords > 0 ){
      this.filledwords--;
      $('#letter'+this.letterids[this.letterids.length-1]).show();
      $('#wordbox' + this.filledwords).text('-');
      this.letterids.pop();
    }
  }
  letterclick(letter, i) : void{
    if(this.filledwords<this.currentPicword.PicAnswer.length){
      $('#wordbox' + this.filledwords).text(letter);
      this.filledwords++;
      this.letterids.push(i);
      $('#letter'+i).hide();
    } 
    if(this.filledwords>=this.currentPicword.PicAnswer.length){
      let cans:string='';
      for(var ab = 0; ab < this.letterids.length; ab++){
        cans+=this.randomstring[this.letterids[ab]];
      }
      if(this.currentPicword.PicAnswer == cans){
        this.userprogress.PicWordDB_PicWordID = this.picwordID;
        this.userprogress.PicWordDB_PicDone = 1;
        this.userprogress.UserCoins = this.userprogress.UserCoins + 4;
        this.userprogressService.updateUserprogress(this.userbase.IdUser, this.userprogress);
        setTimeout(()=>{
          this.nextshow();
        }, 200);
      } else{
        alert("Incorrect!");
      }
    }
  }
  nextshow(){
    this.filledwords=0;
    this.letterids=[];
    this.picwordService
    .getNextPicQuiz(this.currentPicword.PicWordID)
    .then((picwords: Picworddb)=>{
      this.picdata = picwords;
      this.datafetched=true;
    });
    setTimeout(()=>{if(this.datafetched==true){
      this.isDataAvailable = false;
      $('label[id^="wordbox"]').text('-');
      this.router.navigateByUrl('/picplay/'+this.picdata.PicWordID);
    }}, 200);
    
  }

}
