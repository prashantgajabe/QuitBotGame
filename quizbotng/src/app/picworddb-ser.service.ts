import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Picworddb } from './Picworddb';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicworddbSerService {
  public picworddbURL = "http://localhost:3000/api/picworddb";

  constructor( private http:HttpClient ) { }
  getPicQuizzes() : Promise<void | Picworddb[]>{
    return this.http.get(this.picworddbURL)
    .toPromise()
    .then(response => response as Picworddb[])
    .catch(this.ErrorMethod);
  }
  getSinglePicQuiz(PicWordID: number) : Promise<void | Picworddb> {
    return this.http.get(this.picworddbURL + '/' + PicWordID)
                .toPromise()
                .then(response => response as Picworddb)
                .catch(this.ErrorMethod);
  }
  getNextPicQuiz(PicWordID: number) : Promise<void | Picworddb> {
    return this.http.get(this.picworddbURL + '/next/' + PicWordID)
                .toPromise()
                .then(response => response as Picworddb)
                .catch(this.ErrorMethod);
  }
  getPrePicQuiz(PicWordID: number) : Promise<void | Picworddb> {
    return this.http.get(this.picworddbURL + '/pre/' + PicWordID)
                .toPromise()
                .then(response => response as Picworddb)
                .catch(this.ErrorMethod);
  }
  createPicworddb(newPicworddb: Picworddb) : Promise<void | Picworddb> {
    return this.http.post(this.picworddbURL, newPicworddb)
                .toPromise()
                .then(response => response as Picworddb)
                .catch(this.ErrorMethod);
  }

  updatePicworddb(PicWordID : number, updatePicworddb: Picworddb) : Promise<void | Picworddb > {
    return this.http.put(this.picworddbURL + "/" + PicWordID, this.updatePicworddb)
                  .toPromise()
                  .then(response => response as Picworddb)
                  .catch(this.ErrorMethod);
  }

  deletePicworddb(PicWordID: number) : Promise<void | Picworddb > {
    return this.http.delete(this.picworddbURL + "/" + PicWordID)
                  .toPromise()
                  .then(response => response as Picworddb)
                  .catch(this.ErrorMethod);
  }

  private ErrorMethod(error: any){
    console.log("something is not working");
  };
}

