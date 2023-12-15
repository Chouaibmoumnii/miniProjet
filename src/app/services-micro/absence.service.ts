import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../model/Reclamation";
import {Absence} from "../model/Absence";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }


  getAllAbsence(): Observable<Absence[]> {
    return this._http.get<Absence[]>(this.apiServer +"absences/get",this.httpOptions );
  }


  deleteAbsence( idAbsence:number){
    return this._http.delete<Absence[]>(this.apiServer+"absences/delete/"+idAbsence,this.httpOptions)
  }


  addAbsence(absence:Absence){
    return this._http.post<Absence[]> (this.apiServer+"absences/add",absence,this.httpOptions)

  }

  editAbsence(absence:Absence){
    return this._http.put<Absence[]> (this.apiServer+"absences/updateAbsence",absence,this.httpOptions)

  }

  getAbsenceById( idAbsence:number){
    return this._http.get<Absence[]>(this.apiServer+"absences/getAbsence/"+idAbsence,this.httpOptions)
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
