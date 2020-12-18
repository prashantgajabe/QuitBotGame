import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizSerService {
  public quizURL = "http://localhost:3000/api/quiz";

  constructor( private http:HttpClient ) { }
  getQuestions() : Promise<void | Quiz[]>{
    return this.http.get(this.quizURL)
    .toPromise()
    .then(response => response as Quiz[])
    .catch(this.ErrorMethod);
  }
  getSingleQuestion(idQuiz: number) : Promise<void | Quiz> {
    return this.http.get(this.quizURL + '/' + idQuiz)
                .toPromise()
                .then(response => response as Quiz)
                .catch(this.ErrorMethod);
  }
  createQuiz(newQuiz: Quiz) : Promise<void | Quiz> {
    return this.http.post(this.quizURL, newQuiz)
                .toPromise()
                .then(response => response as Quiz)
                .catch(this.ErrorMethod);
  }

  updateQuiz(idQuiz : number, updateQuiz: Quiz) : Promise<void | Quiz > {
    return this.http.put(this.quizURL + "/" + idQuiz, this.updateQuiz)
                  .toPromise()
                  .then(response => response as Quiz)
                  .catch(this.ErrorMethod);
  }

  deleteQuiz(idQuiz: number) : Promise<void | Quiz > {
    return this.http.delete(this.quizURL + "/" + idQuiz)
                  .toPromise()
                  .then(response => response as Quiz)
                  .catch(this.ErrorMethod);
  }

  private ErrorMethod(error: any){
    console.log("something is not working");
  };
}
