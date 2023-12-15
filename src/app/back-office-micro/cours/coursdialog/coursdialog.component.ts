import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogRef} from "@angular/material/dialog";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Reclamation} from "../../../model/Reclamation";
import {Cours} from "../../../model/Cours";
import {CoursService} from "../../../services-micro/cours.service";

@Component({

  selector: 'app-coursdialog',
  templateUrl: './coursdialog.component.html',
  styleUrls: ['./coursdialog.component.css']


})
export class CoursdialogComponent implements OnInit{

  public dialogRef: MatDialogRef<CoursdialogComponent>;

  constructor(private _serviccou:CoursService,
              dialogRef: MatDialogRef<CoursdialogComponent>,
              private snackBar: MatSnackBar,private router: Router){
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {

  }
  cours : Cours=new Cours();
  addCours(){
    this._serviccou.addCours(this.cours).subscribe();
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open('L\'Cours a été ajoutée avec succès', 'Fermer', config);
    window.location.reload();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
{

}
