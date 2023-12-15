import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Reclamation} from "../../model/Reclamation";
import {ReclamtionService} from "../../services-micro/reclamtion.service";
import {JwtService} from "../../services/jwt.service";
import {MatDialog} from "@angular/material/dialog";
import {ReclamtiondialogComponent} from "../reclamtion/reclamtiondialog/reclamtiondialog.component";
import {ReclamtionupdatedialogComponent} from "../reclamtion/reclamtionupdatedialog/reclamtionupdatedialog.component";
import {ExamenService} from "../../services-micro/examen.service";
import {Absence} from "../../model/Absence";
import {Examen} from "../../model/Examen";
import {ExamendialogComponent} from "./examendialog/examendialog.component";
import {ExamenupdatedialogComponent} from "./examenupdatedialog/examenupdatedialog.component";

@Component({

  selector: 'app-exeman',
  templateUrl: './exeman.component.html',
  styleUrls: ['./exeman.component.css']



})
export class ExemanComponent implements OnInit {
  examens : Examen[] = [];

  //selectedUniversite: Universite | null = null;
  //nouvelleUniversite: { idUniversite: 0, nomUniversite: '', adresse: '' } = { idUniversite: 0, nomUniversite: '', adresse: '' };
  // searchQuery: string = '';
//private searchTerms = new Subject<string>();

  constructor(
    private serviceex: ExamenService,
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
    this.serviceex.getAllExamen().subscribe((src: Examen[]) => {
      console.log(src);
      this.examens = src;
    });
  }


  deletetAbsence(idExam) {
    if (confirm('Voulez-vous supprimer cette Absence ?')) {
      this.serviceex.deleteExamen(idExam).subscribe(() => {
        alert('Suppression réussie');
        window.location.reload();
      });
    }
  }

  public openDialogg() {
    const dialogRef = this.dialog.open(ExamendialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
    });
  }

  public openDialogUpdate(idExam: number) {
    const dialogRef = this.dialog.open(ExamenupdatedialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: { idExam: idExam }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }
}
