import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizselect',
  templateUrl: './quizselect.component.html',
  styleUrls: ['./quizselect.component.css']
})
export class QuizselectComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  playquiz(): void{
    this.router.navigate(['/quizplay']);
  }
  playpic(): void{
    this.router.navigate(['/picplay']);
  }
  playmath(): void{
    this.router.navigate(['/mathplay']);
  }
}
