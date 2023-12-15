import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogRef} from "@angular/material/dialog";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Reclamation} from "../../../model/Reclamation";
import {Planification} from "../../../model/Planification";
import {PlanificationService} from "../../../services-micro/planification.service";

@Component({

  selector: 'app-planificationdialog',
  templateUrl: './planificationdialog.component.html',
  styleUrls: ['./planificationdialog.component.css']

})
export class PlanificationdialogComponent implements OnInit{

public dialogRef: MatDialogRef<PlanificationdialogComponent>;

  constructor(private _servicp:PlanificationService,
    dialogRef: MatDialogRef<PlanificationdialogComponent>,
    private snackBar: MatSnackBar,private router: Router){
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {

  }
  planification : Planification=new Planification();
  addReclamation(){
    this._servicp.addPlanification(this.planification).subscribe();
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.snackBar.open('L\'Planification a été ajoutée avec succès', 'Fermer', config);
    window.location.reload();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
