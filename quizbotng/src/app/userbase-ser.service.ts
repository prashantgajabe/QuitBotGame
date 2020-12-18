import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userbase } from './userbase';

@Injectable({
  providedIn: 'root'
})
export class UserbaseSerService {
  public userbaseURL = "http://localhost:3000/users";

  constructor( private http:HttpClient) { }
  getUserbase() : Promise<void | Userbase[]>{
    return this.http.get(this.userbaseURL)
    .toPromise()
    .then(response => response as Userbase[])
    .catch(this.ErrorMethod);
  }
  getSingleUser(IdUser: String) : Promise<void | Userbase> {
    return this.http.get(this.userbaseURL + '/' + IdUser)
                .toPromise()
                .then(response => response as Userbase)
                .catch(this.ErrorMethod);
  }
  getUserbyUserName(Username: String) : Promise<void | Userbase> {
    return this.http.get(this.userbaseURL + '/user/' + Username)
                .toPromise()
                .then(response => response as Userbase)
                .catch(this.ErrorMethod);
  }

  createUser(newUser: Userbase) : Promise<void | Userbase> {
    return this.http.post(this.userbaseURL, newUser)
                .toPromise()
                .then(response => response as Userbase)
                .catch(this.ErrorMethod);
  }

  updateUser(IdUser : String, UpdateUser: Userbase) : Promise<void | Userbase > {
    return this.http.put(this.userbaseURL + "/" + IdUser, this.updateUser)
                  .toPromise()
                  .then(response => response as Userbase)
                  .catch(this.ErrorMethod);
  }

  deleteUser(IdUser: String) : Promise<void | Userbase > {
    return this.http.delete(this.userbaseURL + "/" + IdUser)
                  .toPromise()
                  .then(response => response as Userbase)
                  .catch(this.ErrorMethod);
  }

  private ErrorMethod(error: any){
    console.log("something is not working");
  };
}
