import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // #region Properties (2)

  public checkIn: any;
  public checkOut: any;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    public dialogRef: MatDialogRef<BookComponent>) { }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public ngOnInit() {
    console.log(this.data);
  }

  // #endregion Public Methods (1)

  // #region Private Methods (1)

  public calculateTotal(checkIn: any, checkOut: any) {
    const checkInDate = moment(checkIn, 'MM-DD-YY');
    const checkOutDate = moment(checkOut, 'MM-DD-YY');

    const nights = checkOutDate.diff(checkInDate, 'days');
    // console.log('%s-%s-%s', checkIn, checkOut, nights);

    return nights * this.data.home.price;
  }

  // #endregion Private Methods (1)


  public bookHome(home: any) {
    this.dialogRef.close();

    this.dataService.bookHome$(home)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}

