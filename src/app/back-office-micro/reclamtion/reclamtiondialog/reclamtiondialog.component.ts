import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogRef} from "@angular/material/dialog";
import {UniversiteService} from "../../../services/universite.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Universite} from "../../../model/Universite";
import {Reclamation} from "../../../model/Reclamation";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";

@Component({

  selector: 'app-reclamtiondialog',
  templateUrl: './reclamtiondialog.component.html',
  styleUrls: ['./reclamtiondialog.component.css']

})
export class ReclamtiondialogComponent implements OnInit{

  public dialogRef: MatDialogRef<ReclamtiondialogComponent>;

  constructor(private _servicr:ReclamtionService,
              dialogRef: MatDialogRef<ReclamtiondialogComponent>,
              private snackBar: MatSnackBar,private router: Router){
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {

  }
  reclamation : Reclamation=new Reclamation();
  addReclamation(){
    this._servicr.addReclamtion(this.reclamation).subscribe();
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open('L\'reclamtion a été ajoutée avec succès', 'Fermer', config);
    window.location.reload();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
