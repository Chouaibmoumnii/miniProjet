import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ExamenService} from "../../../services-micro/examen.service";

@Component({


  selector: 'app-examenupdatedialog',
  templateUrl: './examenupdatedialog.component.html',
  styleUrls: ['./examenupdatedialog.component.css']


})
export class ExamenupdatedialogComponent implements OnInit {
  editedExamen: any = {};
  idExam: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceex: ExamenService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ExamenupdatedialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { idExam: number }
) {}

  ngOnInit(): void {
    if (this.data && this.data.idExam) {
    this.idExam = this.data.idExam;
    this.serviceex.getExamenById(this.idExam).subscribe(
      (reclamation) => {
        this.editedExamen = reclamation;
      },
      (error) => {
        console.error('Error fetching Examen data:', error);
      }
    );
  }
}

  saveChanges() {
    this.serviceex.editExamen(this.editedExamen).subscribe(
      () => {
        const config = new MatSnackBarConfig();
        config.duration = 2000;

        this.snackBar.open('L\'Examen a été modifiée avec succès', 'Fermer', config);
        window.location.reload();

      },
      (error) => {
        console.error('Error updating Examen data:', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
