import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Reclamation} from "../../model/Reclamation";
import {ReclamtionService} from "../../services-micro/reclamtion.service";
import {JwtService} from "../../services/jwt.service";
import {MatDialog} from "@angular/material/dialog";
import {ReclamtiondialogComponent} from "../reclamtion/reclamtiondialog/reclamtiondialog.component";
import {ReclamtionupdatedialogComponent} from "../reclamtion/reclamtionupdatedialog/reclamtionupdatedialog.component";
import {Cours} from "../../model/Cours";
import {CoursService} from "../../services-micro/cours.service";
import {CoursdialogComponent} from "./coursdialog/coursdialog.component";
import {CoursupdatedialogComponent} from "./coursupdatedialog/coursupdatedialog.component";

@Component({


  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']

})
export class CoursComponent implements OnInit {
  courss : Cours[] = [];

  //selectedUniversite: Universite | null = null;
  //nouvelleUniversite: { idUniversite: 0, nomUniversite: '', adresse: '' } = { idUniversite: 0, nomUniversite: '', adresse: '' };
  // searchQuery: string = '';
//private searchTerms = new Subject<string>();

  constructor(
    private serviceco: CoursService,
    private service: JwtService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCours();
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

  getCours() {
    this.serviceco.getAllCours().subscribe((src: Cours[]) => {
      console.log(src);
      this.courss = src;
    });
  }


  deletetCours(id) {
    if (confirm('Voulez-vous supprimer cette Cours ?')) {
      this.serviceco.deleteCours(id).subscribe(() => {
        alert('Suppression réussie');
        window.location.reload();
      });
    }
  }

  public openDialogg() {
    const dialogRef = this.dialog.open(CoursdialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
    });
  }

  public openDialogUpdate(id: number) {
    const dialogRef = this.dialog.open(CoursupdatedialogComponent, {
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
