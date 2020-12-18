import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Picwordlist } from './picwordlist';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicwordlistSerService {
  public piclistURL = "http://localhost:3000/api/piclist";

  constructor( private http:HttpClient ) { }
  getPiclist() : Promise<void | Picwordlist[]>{
    return this.http.get(this.piclistURL)
    .toPromise()
    .then(response => response as Picwordlist[])
    .catch(this.ErrorMethod);
  }
  getSinglePiclist(PicID: number) : Promise<void | Picwordlist> {
    return this.http.get(this.piclistURL + '/' + PicID)
                .toPromise()
                .then(response => response as Picwordlist)
                .catch(this.ErrorMethod);
  }
  createPicwordlist(newPicwordlist: Picwordlist) : Promise<void | Picwordlist> {
    return this.http.post(this.piclistURL, newPicwordlist)
                .toPromise()
                .then(response => response as Picwordlist)
                .catch(this.ErrorMethod);
  }

  updatePicwordlist(PicID : String, updatePicwordlist: Picwordlist) : Promise<void | Picwordlist > {
    return this.http.put(this.piclistURL + "/" + PicID, this.updatePicwordlist)
                  .toPromise()
                  .then(response => response as Picwordlist)
                  .catch(this.ErrorMethod);
  }

  deletePicwordlist(PicID: String) : Promise<void | Picwordlist > {
    return this.http.delete(this.piclistURL + "/" + PicID)
                  .toPromise()
                  .then(response => response as Picwordlist)
                  .catch(this.ErrorMethod);
  }

  private ErrorMethod(error: any){
    console.log("something is not working");
  };

}

