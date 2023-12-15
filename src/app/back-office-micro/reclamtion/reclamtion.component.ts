import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Universite} from "../../model/Universite";
import {Foyer} from "../../model/Foyer";
import {debounceTime, distinctUntilChanged, Subject, switchMap} from "rxjs";
import {UniversiteService} from "../../services/universite.service";
import {JwtService} from "../../services/jwt.service";
import {MatDialog} from "@angular/material/dialog";
import {UniversitedialogComponent} from "../../back-office/universite/universitedialog/universitedialog.component";
import {
  UniversiteupdadialogComponent
} from "../../back-office/universite/universiteupdadialog/universiteupdadialog.component";
import {ReclamtionService} from "../../services-micro/reclamtion.service";
import {Reclamation} from "../../model/Reclamation";
import {ReclamtiondialogComponent} from "./reclamtiondialog/reclamtiondialog.component";
import {ReclamtionupdatedialogComponent} from "./reclamtionupdatedialog/reclamtionupdatedialog.component";

@Component({

  selector: 'app-reclamtion',
  templateUrl: './reclamtion.component.html',
  styleUrls: ['./reclamtion.component.css']

})


export class ReclamtionComponent implements OnInit {
  reclamations : Reclamation[] = [];

  //selectedUniversite: Universite | null = null;
  //nouvelleUniversite: { idUniversite: 0, nomUniversite: '', adresse: '' } = { idUniversite: 0, nomUniversite: '', adresse: '' };
 // searchQuery: string = '';
//private searchTerms = new Subject<string>();

  constructor(
    private servicer: ReclamtionService,
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
    this.servicer.getAllReclamtion().subscribe((src: Reclamation[]) => {
      console.log(src);
      this.reclamations = src;
    });
  }


  deletetReclamation(idReclamtion) {
    if (confirm('Voulez-vous supprimer cette Reclamation ?')) {
      this.servicer.deleteReclamtion(idReclamtion).subscribe(() => {
        alert('Suppression réussie');
        window.location.reload();
      });
    }
  }

public openDialogg() {
    const dialogRef = this.dialog.open(ReclamtiondialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
    });
  }

public openDialogUpdate(idReclamtion: number) {
    const dialogRef = this.dialog.open(ReclamtionupdatedialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: { idReclamtion: idReclamtion }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }
}
