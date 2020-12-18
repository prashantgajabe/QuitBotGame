import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mathriddles } from './mathriddles';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MathriddlesSerService {
  public mathriddlesURL = "http://localhost:3000/api/mathriddle";

  constructor( private http:HttpClient ) { }
  getMathRiddles() : Promise<void | Mathriddles[]>{
    return this.http.get(this.mathriddlesURL)
    .toPromise()
    .then(response => response as Mathriddles[])
    .catch(this.ErrorMethod);
  }
  getRiddle(idMathRiddle: number) : Promise<void | Mathriddles> {
    return this.http.get(this.mathriddlesURL + '/' + idMathRiddle)
                .toPromise()
                .then(response => response as Mathriddles)
                .catch(this.ErrorMethod);
  }
  getNextRiddle(idMathRiddle: number) : Promise<void | Mathriddles> {
    return this.http.get(this.mathriddlesURL + '/next/' + idMathRiddle)
                .toPromise()
                .then(response => response as Mathriddles)
                .catch(this.ErrorMethod);
  }
  getPreRiddle(idMathRiddle: number) : Promise<void | Mathriddles> {
    return this.http.get(this.mathriddlesURL + '/pre/' + idMathRiddle)
                .toPromise()
                .then(response => response as Mathriddles)
                .catch(this.ErrorMethod);
  }
  createMathRiddle(newMathRiddle: Mathriddles) : Promise<void | Mathriddles> {
    return this.http.post(this.mathriddlesURL, newMathRiddle)
                .toPromise()
                .then(response => response as Mathriddles)
                .catch(this.ErrorMethod);
  }

  updateMathRiddle(idMathRiddle : number, updateMathRiddle: Mathriddles) : Promise<void | Mathriddles > {
    return this.http.put(this.mathriddlesURL + "/" + idMathRiddle, this.updateMathRiddle)
                  .toPromise()
                  .then(response => response as Mathriddles)
                  .catch(this.ErrorMethod);
  }

  deleteMathRiddle(idMathRiddle: number) : Promise<void | Mathriddles > {
    return this.http.delete(this.mathriddlesURL + "/" + idMathRiddle)
                  .toPromise()
                  .then(response => response as Mathriddles)
                  .catch(this.ErrorMethod);
  }

  private ErrorMethod(error: any){
    console.log("something is not working");
  };

}

