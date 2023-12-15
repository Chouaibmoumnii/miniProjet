import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../../../services/universite.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";

@Component({

  selector: 'app-reclamtionupdatedialog',
  templateUrl: './reclamtionupdatedialog.component.html',
  styleUrls: ['./reclamtionupdatedialog.component.css']

})
export class ReclamtionupdatedialogComponent implements OnInit {
  editedReclamation: any = {};
  idReclamtion: number;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private servicer: ReclamtionService,
      private snackBar: MatSnackBar,
      private dialogRef: MatDialogRef<ReclamtionupdatedialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { idReclamtion: number }
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.idReclamtion) {
      this.idReclamtion = this.data.idReclamtion;
      this.servicer.geteclamtionById(this.idReclamtion).subscribe(
          (reclamation) => {
            this.editedReclamation = reclamation;
          },
          (error) => {
            console.error('Error fetching university data:', error);
          }
      );
    }
  }

  saveChanges() {
    this.servicer.editReclamtion(this.editedReclamation).subscribe(
        () => {
          const config = new MatSnackBarConfig();
          config.duration = 2000;

          this.snackBar.open('L\'reclamation a été modifiée avec succès', 'Fermer', config);
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
