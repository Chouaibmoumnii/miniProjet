import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlanificationService} from "../../../services-micro/planification.service";

@Component({

  selector: 'app-planificationupdatedialog',
  templateUrl: './planificationupdatedialog.component.html',
  styleUrls: ['./planificationupdatedialog.component.css']

})
export class PlanificationupdatedialogComponent implements OnInit {
  editePlanification: any = {};
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicep: PlanificationService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<PlanificationupdatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.id) {
      this.id = this.data.id;
      this.servicep.getPlanificationById(this.id).subscribe(
        (reclamation) => {
          this.editePlanification = reclamation;
        },
        (error) => {
          console.error('Error fetching university data:', error);
        }
      );
    }
  }

  saveChanges() {
    this.servicep.editPlanification(this.editePlanification).subscribe(
      () => {
        const config = new MatSnackBarConfig();
        config.duration = 2000;

        this.snackBar.open('L\'Planification a été modifiée avec succès', 'Fermer', config);
        window.location.reload();

      },
      (error) => {
        console.error('Error updating Planification data:', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
