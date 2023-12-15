import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Reclamation} from "../../model/Reclamation";
import {ReclamtionService} from "../../services-micro/reclamtion.service";
import {JwtService} from "../../services/jwt.service";
import {MatDialog} from "@angular/material/dialog";
import {ReclamtiondialogComponent} from "../reclamtion/reclamtiondialog/reclamtiondialog.component";
import {ReclamtionupdatedialogComponent} from "../reclamtion/reclamtionupdatedialog/reclamtionupdatedialog.component";
import {Absence} from "../../model/Absence";
import {AbsenceService} from "../../services-micro/absence.service";
import {AbsenceupdatedialogComponent} from "./absenceupdatedialog/absenceupdatedialog.component";
import {AbsencedialogComponent} from "./absencedialog/absencedialog.component";

@Component({



  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']

})
export class AbsenceComponent implements OnInit {
  absences : Absence[] = [];

  //selectedUniversite: Universite | null = null;
  //nouvelleUniversite: { idUniversite: 0, nomUniversite: '', adresse: '' } = { idUniversite: 0, nomUniversite: '', adresse: '' };
  // searchQuery: string = '';
//private searchTerms = new Subject<string>();

  constructor(
    private servicea: AbsenceService,
    private service: JwtService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAbsence();
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

  getAbsence() {
    this.servicea.getAllAbsence().subscribe((src: Absence[]) => {
      console.log(src);
      this.absences = src;
    });
  }


  deletetAbsence(idAbsence) {
    if (confirm('Voulez-vous supprimer cette Absence ?')) {
      this.servicea.deleteAbsence(idAbsence).subscribe(() => {
        alert('Suppression réussie');
        window.location.reload();
      });
    }
  }

  public openDialogg() {
    const dialogRef = this.dialog.open(AbsencedialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
    });
  }

  public openDialogUpdate(idAbsence: number) {
    const dialogRef = this.dialog.open(AbsenceupdatedialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: { idAbsence: idAbsence }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }
}
