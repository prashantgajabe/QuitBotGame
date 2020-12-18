import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userprogress } from './userprogress';

@Injectable({
  providedIn: 'root'
})
export class UserprogressSerService {
  public userprogressURL = "http://localhost:3000/api/userprog";

  constructor( private http:HttpClient ) { }
  getUserProgress(Userbase_IdUser: number) : Promise<void | Userprogress> {
    return this.http.get(this.userprogressURL + '/' + Userbase_IdUser)
                .toPromise()
                .then(response => response as Userprogress)
                .catch(this.ErrorMethod);
  }

  createUserProgress(newUserProgress: Userprogress) : Promise<void | Userprogress> {
    return this.http.post(this.userprogressURL, newUserProgress)
                .toPromise()
                .then(response => response as Userprogress)
                .catch(this.ErrorMethod);
  }

  updateUserprogress(Userbase_IdUser : number, updateUserprogress: Userprogress) : Promise<void | Userprogress > {
    return this.http.put(this.userprogressURL + "/" + Userbase_IdUser, updateUserprogress)
                  .toPromise()
                  .then(response => response as Userprogress)
                  .catch(this.ErrorMethod);
  }

  deleteUserProgress(Userbase_IdUser: number) : Promise<void | Userprogress > {
    return this.http.delete(this.userprogressURL + "/" + Userbase_IdUser)
                  .toPromise()
                  .then(response => response as Userprogress)
                  .catch(this.ErrorMethod);
  }

  private ErrorMethod(error: any){
    console.log("something is not working");
  };
}

