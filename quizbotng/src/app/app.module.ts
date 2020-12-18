import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { AbstractControl, FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { QuizPlayComponent } from './quiz-play/quiz-play.component';
import { FrameworkComponent } from './framework/framework.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PicwordPlayComponent } from './picword-play/picword-play.component';
import { MathPlayComponent } from './math-play/math-play.component';
import { QuizselectComponent } from './quizselect/quizselect.component';


@NgModule({
  declarations: [
    HomeComponent,
    QuizPlayComponent,
    FrameworkComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    PicwordPlayComponent,
    MathPlayComponent,
    QuizselectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent 
      },
      {
        path: 'quizplay',
        component: QuizPlayComponent
      },
      {
        path: 'quizplay/:idQuiz',
        component: QuizPlayComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'picplay',
        component: PicwordPlayComponent
      },
      {
        path: 'picplay/:PicWordID',
        component: PicwordPlayComponent
      },
      {
        path: 'mathplay',
        component: MathPlayComponent
      },
      {
        path: 'mathplay/:idMathRiddle',
        component: MathPlayComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'quizselect',
        component: QuizselectComponent
      }
    ])
  ],
  providers: [{provide:APP_BASE_HREF, useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
