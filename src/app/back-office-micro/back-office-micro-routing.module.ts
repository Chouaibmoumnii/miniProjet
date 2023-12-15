import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AbsenceComponent} from "./absence/absence.component";
import {ReclamtionComponent} from "./reclamtion/reclamtion.component";
import {ExemanComponent} from "./exeman/exeman.component";
import {CoursComponent} from "./cours/cours.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {PlanificationComponent} from "./planification/planification.component";
import {BackMicroComponent} from "./back-micro/back-micro.component";




const routes: Routes = [

  {path:"",component: BackMicroComponent, children:[
      {path:"incription", component:InscriptionComponent},
      {path:"absence", component:AbsenceComponent},
      {path:"planification", component:PlanificationComponent},
      {path:"cours", component:CoursComponent},
      {path:"reclamtion", component:ReclamtionComponent},
      {path:"examen", component:ExemanComponent},

    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeMicroRoutingModule { }
