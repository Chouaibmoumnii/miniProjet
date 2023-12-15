import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../model/Reclamation";
import {Planification} from "../model/Planification";

@Injectable({
  providedIn: 'root'
})
export class PlanificationService{

  private apiServer:String='http://localhost:8081/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }


  getAllPlanification(): Observable<Planification[]> {
    return this._http.get<Planification[]>(this.apiServer +"planification/getAllPlanifications",this.httpOptions);
  }


  deletePlanification( id:number){
    return this._http.delete<Planification[]>(this.apiServer+"planification/deletepalnification/"+id,this.httpOptions)
  }


  addPlanification(planification:Planification){
    return this._http.post<Planification[]> (this.apiServer+"planification/add",planification,this.httpOptions)

  }

  editPlanification(planification:Planification){
    return this._http.put<Planification[]> (this.apiServer+"planification/updatePlamification",planification,this.httpOptions)

  }

  getPlanificationById( id:number){
    return this._http.get<Planification[]>(this.apiServer+"planification/getPlanification/"+id,this.httpOptions)
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
