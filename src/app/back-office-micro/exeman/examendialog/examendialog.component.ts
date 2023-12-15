import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogRef} from "@angular/material/dialog";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Reclamation} from "../../../model/Reclamation";
import {ExamenService} from "../../../services-micro/examen.service";
import {Examen} from "../../../model/Examen";

@Component({


  selector: 'app-examendialog',
  templateUrl: './examendialog.component.html',
  styleUrls: ['./examendialog.component.css']




})
export class ExamendialogComponent implements OnInit{

  public dialogRef: MatDialogRef<ExamendialogComponent>;

  constructor(private _servicex:ExamenService,
              dialogRef: MatDialogRef<ExamendialogComponent>,
              private snackBar: MatSnackBar,private router: Router){
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {

  }
  examen : Examen=new Examen();
  addExamen(){
    this._servicex.addExamen(this.examen).subscribe();
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open('L\'reclamtion a été ajoutée avec succès', 'Fermer', config);
    window.location.reload();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}

