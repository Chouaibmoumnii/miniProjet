import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Reclamation} from "../../model/Reclamation";
import {ReclamtionService} from "../../services-micro/reclamtion.service";
import {JwtService} from "../../services/jwt.service";
import {MatDialog} from "@angular/material/dialog";
import {ReclamtiondialogComponent} from "../reclamtion/reclamtiondialog/reclamtiondialog.component";
import {ReclamtionupdatedialogComponent} from "../reclamtion/reclamtionupdatedialog/reclamtionupdatedialog.component";
import {Planification} from "../../model/Planification";
import {PlanificationService} from "../../services-micro/planification.service";
import {PlanificationdialogComponent} from "./planificationdialog/planificationdialog.component";
import {PlanificationupdatedialogComponent} from "./planificationupdatedialog/planificationupdatedialog.component";

@Component({

  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css']

})
export class PlanificationComponent implements OnInit {
  planifications : Planification[] = [];

  //selectedUniversite: Universite | null = null;
  //nouvelleUniversite: { idUniversite: 0, nomUniversite: '', adresse: '' } = { idUniversite: 0, nomUniversite: '', adresse: '' };
  // searchQuery: string = '';
//private searchTerms = new Subject<string>();

  constructor(
    private servicep: PlanificationService,
    private service: JwtService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getReclamation();
    // this.getFoyer();

    // React to changes in the search query
    // this.searchTerms.pipe(
    // debounceTime(300),
    // distinctUntilChanged(),
    //switchMap((term: string) => this.serviceu.searchUniversities(term))
    //).subscribe(universities => {
    // Update universities based on search results
    //this.universites = universities;
    //});
  }

  // onSearch(): void {
  // this.searchTerms.next(this.searchQuery);
  //}

  getReclamation() {
    this.servicep.getAllPlanification().subscribe((src: Planification[]) => {
      console.log(src);
      this.planifications = src;
    });
  }


  deletetplanification(id) {
    if (confirm('Voulez-vous supprimer cette Reclamation ?')) {
      this.servicep.deletePlanification(id).subscribe(() => {
        alert('Suppression réussie');
        window.location.reload();
      });
    }
  }

  public openDialogg() {
    const dialogRef = this.dialog.open(PlanificationdialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
    });
  }

  public openDialogUpdate(id: number) {
    const dialogRef = this.dialog.open(PlanificationupdatedialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }
}
