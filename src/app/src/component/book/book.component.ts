import { Component, Inject, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';


import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterContentChecked {
  // #region Properties (2)

  public checkIn: any;
  public checkOut: any;
  public total: number;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    public dialogRef: MatDialogRef<BookComponent>,
    private snackBar: MatSnackBar,
    private changeDetector: ChangeDetectorRef) { }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public ngOnInit() {
    this.total = 0;
  }
  public ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  // #endregion Public Methods (1)

  // #region Private Methods (1)

  public calculateTotal(checkIn: any, checkOut: any) {
    const checkInDate = moment(checkIn, 'MM-DD-YY');
    const checkOutDate = moment(checkOut, 'MM-DD-YY');

    const nights = checkOutDate.diff(checkInDate, 'days');
    this.total = nights * this.data.home.price || 0;
    // console.log('%s-%s-%s', checkIn, checkOut, nights);
    if (!this.total || this.total < 0 || this.total >= 900000) {
      this.total = 0;
    }
    return this.total;
  }

  // #endregion Private Methods (1)


  public bookHome(home: any) {
    this.dialogRef.close();

    this.dataService.bookHome$(home)
      .subscribe(() => {
        this.dialogRef.close();
        this.snackBar.open(home.title + ' Booked!', null, {
          duration: 2000
        });
      });
  }
}

