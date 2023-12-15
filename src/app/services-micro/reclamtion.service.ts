import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Universite} from "../model/Universite";
import {Foyer} from "../model/Foyer";
import {Bloc} from "../model/Bloc";
import {Reclamation} from "../model/Reclamation";

@Injectable({
  providedIn: 'root'
})
export class ReclamtionService {

  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }


  getAllReclamtion(): Observable<Reclamation[]> {
    return this._http.get<Reclamation[]>(this.apiServer +"reclamation/retrieveAllReclamtion", {
      headers: this.createAuthorizationHeader()
    });
  }


  deleteReclamtion( idReclamtion:number){
    return this._http.delete<Reclamation[]>(this.apiServer+"reclamation/removeReclamation/"+idReclamtion,this.httpOptions)
  }


  addReclamtion(reclamation:Reclamation){
    return this._http.post<Reclamation[]> (this.apiServer+"reclamation/AddReclamation",reclamation,this.httpOptions)

  }

  editReclamtion(reclamation:Reclamation){
    return this._http.put<Reclamation[]> (this.apiServer+"reclamation/updateReclamation",reclamation,this.httpOptions)

  }

  geteclamtionById( idReclamtion:number){
    return this._http.get<Reclamation[]>(this.apiServer+"reclamation/retrieveReclamation/"+idReclamtion,this.httpOptions)
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      console.log("JWT token not found in local storage");
    }
    return null;
  }


  /*


    getUniversiteByName(nomUniversite: string) {
      return this._http.get<Universite>(this.apiServer+"auth/byName/"+nomUniversite, this.httpOptions);
    }
    getUniversiteWithFoyer(): Observable<Universite[]> {
      // Assume you have a method to retrieve available universities
      return this._http.get<Universite[]>(this.apiServer + "auth/getAvailableUniversities", this.httpOptions);
    }

    isUniversiteInUse(universiteId: number): Observable<boolean> {
      return this._http.get<boolean>(`${this.apiServer}auth/isUniversiteInUse/${universiteId}`, this.httpOptions);
    }

    //getUniversityWithOutFoyer():Observable<Universite[]>{
    //return this._http.get<Universite[]>(this.apiServer + "universite/getAllUniversites", this.httpOptions).pipe(
    //map((universites: Universite[]) => universites.filter(u => u.foyer?.idFoyer !== null))
    //);
    //}

    getAllUniversityWithoutFoyer():Observable<Universite[]>{
      return this._http.get<Universite[]> (this.apiServer+"auth/getAllUniversiteWithoutFoyer",this.httpOptions)
    }

    searchUniversities(query: string): Observable<Universite[]> {
      const url = `http://localhost:8081/auth/search?query=${query}`;
      return this._http.get<Universite[]>(url);
    }
  */


}
