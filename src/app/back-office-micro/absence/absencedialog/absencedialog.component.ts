import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogRef} from "@angular/material/dialog";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Reclamation} from "../../../model/Reclamation";
import {AbsenceService} from "../../../services-micro/absence.service";
import {Absence} from "../../../model/Absence";

@Component({

  selector: 'app-absencedialog',
  templateUrl: './absencedialog.component.html',
  styleUrls: ['./absencedialog.component.css']

})
export class AbsencedialogComponent implements OnInit{

public dialogRef: MatDialogRef<AbsencedialogComponent>;

  constructor(private _servica:AbsenceService,
    dialogRef: MatDialogRef<AbsencedialogComponent>,
    private snackBar: MatSnackBar,private router: Router){
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {

  }
  absence : Absence=new Absence();
  addReclamation(){
    this._servica.addAbsence(this.absence).subscribe();
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open('L\'absence a été ajoutée avec succès', 'Fermer', config);
    window.location.reload();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }




}
