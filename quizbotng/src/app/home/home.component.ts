import { AfterViewInit, Component} from '@angular/core';
import * as anime from 'animejs';
import { Router } from '@angular/router';
import {NgxEncryptCookieService} from 'ngx-encrypt-cookie';

declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  usernamecookie: String;

  constructor(private router: Router, private cookie:NgxEncryptCookieService){

  }
  ngAfterViewInit(): void {
    // let animation = anime({
    //   targets: '.quizlogohome',
    //   translateY: 100,
    //   borderRadius: 50,
    //   duration: 1500,
    //   easing: 'linear'
    // });
    if(this.cookie.get("user", false)==''){
      $('#loginbtn').show();
      $('#signupbtn').show();
      $('#playbtn').text("Play as Guest");
    } else {
      $('#loginbtn').hide();
      $('#signupbtn').hide();
      $('#playbtn').text("Play");
    }
  }
  playasguest(): void{
    this.router.navigate(['/quizselect']);
  }
  loginbtn(): void{
    this.router.navigate(['/login']);
  }
  singupbtn(): void{
    this.router.navigate(['/signup']);
  }
}
