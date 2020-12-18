import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';
import anime from 'animejs/lib/anime.es'
import { Quiz } from '../quiz';
import { NgxEncryptCookieService } from 'ngx-encrypt-cookie';
import { QuizSerService } from '../quiz-ser.service';
import { Userprogress } from '../userprogress';
import { UserprogressSerService } from '../userprogress-ser.service';
import { Userbase } from '../userbase';
import { UserbaseSerService } from '../userbase-ser.service';

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrls: ['./quiz-play.component.css']
})
export class QuizPlayComponent implements OnInit {
  title: "Quiz";
  currentQuiz: Quiz;
  idQuiz: number;
  routeSub: Subscription;
  a : String;
  usernamecookie: String;
  passcookie: String;
  keycookie: String;
  ChosenAnswer: String = null;
  optionArray: String[]=["#Op1", "#Op2", "#Op3", "#Op4"];
  quizdone: number;
  dataloaded: boolean= false;
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
  constructor(private quizService :QuizSerService, private userbaseService :UserbaseSerService, private userprogressService :UserprogressSerService, private cookie:NgxEncryptCookieService, private route :ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.cookie.get("user", false)==''){
      this.routeSub = this.route.params.subscribe(params => {
        this.idQuiz = params['idQuiz'];
        if (this.idQuiz==null || this.idQuiz==0) {
          this.idQuiz=1;
        }
        this.quizService
              .getSingleQuestion(this.idQuiz)
              .then((quizzes:Quiz)=>{
                this.currentQuiz = quizzes
              });
              setTimeout(()=>{
                // this.router.navigate(['/']);
                $("#h3quizquestion").html(this.currentQuiz.QuizQuestion);
                $("#h5quizdetail").html(this.currentQuiz.QuizQuestionDetail);
                $("#Op1").html(this.currentQuiz.QuizOp1);
                $("#Op2").html(this.currentQuiz.QuizOp2);
                $("#Op3").html(this.currentQuiz.QuizOp3);
                $("#Op4").html(this.currentQuiz.QuizOp4);
                $('#opselecth').remove();
                $('#correctlabel').remove();
                this.dataloaded = true;
                anime({
                  targets: this.optionArray,
                  color: "#ffffff",
                  duration: 300,
                  easing: 'linear'
                });
              }, 300);
      });
      
    } else{
      this.usernamecookie = this.cookie.get("user", false);
      this.keycookie = this.cookie.get(this.usernamecookie+'-k', false);
      this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
      // alert(this.passcookie);
      this.routeSub = this.route.params.subscribe(params => {
        this.idQuiz = params['idQuiz'];
        
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
              this.idQuiz = this.userprogress.Quiz_idQuiz;
              this.quizdone = this.userprogress.Quiz_QuizDone;
              if (this.idQuiz==null || this.idQuiz==0) {
                this.idQuiz=1;
              } else if (this.idQuiz!=null || this.idQuiz != 0){
                if (this.quizdone == 1){
                  this.idQuiz = this.idQuiz + 1;
                }
              }
              this.quizService
              .getSingleQuestion(this.idQuiz)
              .then((quizzes:Quiz)=>{
                this.currentQuiz = quizzes
              });
              setTimeout(()=>{
                $("#h3quizquestion").text(this.currentQuiz.QuizQuestion);
                $("#h5quizdetail").text(this.currentQuiz.QuizQuestionDetail);
                $("#Op1").text(this.currentQuiz.QuizOp1);
                $("#Op2").text(this.currentQuiz.QuizOp2);
                $("#Op3").text(this.currentQuiz.QuizOp3);
                $("#Op4").text(this.currentQuiz.QuizOp4);
                $('#opselecth').remove();
                $('#correctlabel').remove();
                $('#coin_head').text(this.userprogress.UserCoins);
                $('#level_head').text("Level: "+this.userprogress.UserLevel);
                this.dataloaded = true;
                anime({
                  targets: this.optionArray,
                  color: "#ffffff",
                  duration: 300,
                  easing: 'linear'
                });
              }, 100);
              
            }, 300);

        }, 300)

      });
    }
  }
  OptionClicked(event) {
    this.a=event.target.id;
    $('#opselecth').remove();
    switch (this.a) {
      case "Op1":
        this.ChosenAnswer = this.currentQuiz.QuizOp1;
        break;
      case "Op2":
        this.ChosenAnswer = this.currentQuiz.QuizOp2;
        break;
      case "Op3":
        this.ChosenAnswer = this.currentQuiz.QuizOp3;
        break;
      case "Op4":
        this.ChosenAnswer = this.currentQuiz.QuizOp4;
        break;
      default:
      this.ChosenAnswer = null;
        break;
    }
    
    let coption = "#"+this.a;
    let restArray = this.optionArray.filter(function (option){
        return option != coption;
      });
      // console.log(restArray);
      anime({
        targets: coption,
        color: "#fff111",
        duration: 300,
        easing: 'linear'
      });
      anime({
        targets: restArray,
        color: "#ffffff",
        duration: 300,
        easing: 'linear'
      });
    }
    CheckAnswer(): void{
      // alert('Hey');
      if (this.ChosenAnswer == null){
        $("#Op4").after("<h5 id=\"opselecth\">Please Select an Option!</h5>");
      } else if(this.currentQuiz.QuizC_Op == this.ChosenAnswer){
          anime({
          targets: "#"+this.a,
          color: "#39FF14",
          duration: 100,
          easing: 'linear'
          });
          $("#Op4").after("<h5 style=\"color: #39FF14;\" id=\"opselecth\">Correct!</h5>");
          this.userprogress.Quiz_idQuiz = this.idQuiz;
          this.userprogress.Quiz_QuizDone = 1;
          this.userprogress.UserCoins = this.userprogress.UserCoins + 4;
          // console.log(this.userprogress);
          this.userprogressService.updateUserprogress(this.userbase.IdUser, this.userprogress);
          
          $("#opselecth").after("<h5 id='correctlabel'>Loading next question...</h5>");
          this.dataloaded = false;
          setTimeout(()=>{
            this.router.navigate(['/quizplay/'+(this.currentQuiz.idQuiz+1)]);
            }, 3000);
        } else
        {
          $("#Op4").after("<h5 style=\"color: red;\" id=\"opselecth\">Incorrect!!</h5>");
          $("#opselecth").after("<h5 id='correctlabel'>Please Try Again!</h5>");
          setTimeout(()=>{
            $('#opselecth').remove();
            $('#correctlabel').remove();
            anime({
              targets: this.optionArray,
              color: "#ffffff",
              duration: 300,
              easing: 'linear'
            });
          }, 2000);
      }
    }

}
