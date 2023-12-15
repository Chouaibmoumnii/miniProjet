import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Absence} from "../model/Absence";
import {Examen} from "../model/Examen";

@Injectable({
  providedIn: 'root'
})
export class ExamenService{

  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }


  getAllExamen(): Observable<Examen[]> {
    return this._http.get<Examen[]>(this.apiServer +"examen/getAllExam",this.httpOptions );
  }


  deleteExamen( idExam:number){
    return this._http.delete<Examen[]>(this.apiServer+"examen/deleteExam/"+idExam,this.httpOptions)
  }


  addExamen(examen:Examen){
    return this._http.post<Examen[]> (this.apiServer+"examen/addExam",examen,this.httpOptions)

  }

  editExamen(examen:Examen){
    return this._http.put<Examen[]> (this.apiServer+"examen/updateExam",examen,this.httpOptions)

  }

  getExamenById( idExam:number){
    return this._http.get<Examen[]>(this.apiServer+"examen/getExam/"+idExam,this.httpOptions)
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
