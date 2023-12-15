import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbsenceService} from "../../../services-micro/absence.service";

@Component({


  selector: 'app-absenceupdatedialog',
  templateUrl: './absenceupdatedialog.component.html',
  styleUrls: ['./absenceupdatedialog.component.css']


})
export class AbsenceupdatedialogComponent implements OnInit {
  editeAbsence: any = {};
  idAbsence: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicea: AbsenceService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AbsenceupdatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idAbsence: number }
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.idAbsence) {
      this.idAbsence = this.data.idAbsence;
      this.servicea.getAbsenceById(this.idAbsence).subscribe(
        (reclamation) => {
          this.editeAbsence = reclamation;
        },
        (error) => {
          console.error('Error fetching university data:', error);
        }
      );
    }
  }

  saveChanges() {
    this.servicea.editAbsence(this.editeAbsence).subscribe(
      () => {
        const config = new MatSnackBarConfig();
        config.duration = 2000;

        this.snackBar.open('L\'absence a été modifiée avec succès', 'Fermer', config);
        window.location.reload();

      },
      (error) => {
        console.error('Error updating Reclamation data:', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
