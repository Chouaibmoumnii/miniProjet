import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbsenceComponent} from "./absence/absence.component";
import {ReclamtionComponent} from "./reclamtion/reclamtion.component";
import {ExemanComponent} from "./exeman/exeman.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {PlanificationComponent} from "./planification/planification.component";
import {CoursComponent} from "./cours/cours.component";
import {ReclamtiondialogComponent} from "./reclamtion/reclamtiondialog/reclamtiondialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AppRoutingModule} from "../app-routing.module";
import {BackMicroComponent} from "./back-micro/back-micro.component";
import {BackOfficeMicroRoutingModule} from "./back-office-micro-routing.module";
import {BackOfficeRoutingModule} from "../back-office/back-office-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ReclamtionupdatedialogComponent} from "./reclamtion/reclamtionupdatedialog/reclamtionupdatedialog.component";
import {AbsencedialogComponent} from "./absence/absencedialog/absencedialog.component";
import {AbsenceupdatedialogComponent} from "./absence/absenceupdatedialog/absenceupdatedialog.component";
import {ExamendialogComponent} from "./exeman/examendialog/examendialog.component";
import {ExamenupdatedialogComponent} from "./exeman/examenupdatedialog/examenupdatedialog.component";
import {CoursdialogComponent} from "./cours/coursdialog/coursdialog.component";
import {CoursupdatedialogComponent} from "./cours/coursupdatedialog/coursupdatedialog.component";
import {PlanificationdialogComponent} from "./planification/planificationdialog/planificationdialog.component";
import {
  PlanificationupdatedialogComponent
} from "./planification/planificationupdatedialog/planificationupdatedialog.component";



@NgModule({
  declarations: [
    BackMicroComponent,
    AbsenceComponent,
    ReclamtionComponent,
    ExemanComponent,
    CoursComponent,
    InscriptionComponent,
    PlanificationComponent,
    ReclamtiondialogComponent,
    ReclamtionupdatedialogComponent,
    AbsencedialogComponent,
    AbsenceupdatedialogComponent,
    ExamendialogComponent,
    ExamenupdatedialogComponent,
    CoursdialogComponent,
    CoursupdatedialogComponent,
    PlanificationdialogComponent,
    PlanificationupdatedialogComponent







  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BackOfficeMicroRoutingModule,
    CommonModule,
    BackOfficeRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class BackOfficeMicroModule { }
