import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {ReclamtionService} from "../../../services-micro/reclamtion.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CoursService} from "../../../services-micro/cours.service";

@Component({


  selector: 'app-coursupdatedialog',
  templateUrl: './coursupdatedialog.component.html',
  styleUrls: ['./coursupdatedialog.component.css']

})
export class CoursupdatedialogComponent  implements OnInit {
  editedCours: any = {};
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicecou: CoursService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CoursupdatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.id) {
      this.id = this.data.id;
      this.servicecou.getCoursById(this.id).subscribe(
        (cours) => {
          this.editedCours = cours;
        },
        (error) => {
          console.error('Error fetching cours data:', error);
        }
      );
    }
  }

  saveChanges() {
    this.servicecou.editCours(this.editedCours).subscribe(
      () => {
        const config = new MatSnackBarConfig();
        config.duration = 2000;

        this.snackBar.open('L\'cours a été modifiée avec succès', 'Fermer', config);
        window.location.reload();

      },
      (error) => {
        console.error('Error updating cours data:', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
