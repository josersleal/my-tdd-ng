import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { DialogService } from '../../services/dialog.service';
import { BookComponent } from '../../component/book/book.component';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  public homes$: any;

  constructor(private dataService: DataService, private dialogService: DialogService) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
    /* of([
      {
        title: 'Home 1',
        image: 'assets/listing.jpg',
        location: 'New York'
      },
      {
        title: 'Home 2',
        image: 'assets/listing.jpg',
        location: 'Boston'
      },
      {
        title: 'Home 3',
        image: 'assets/listing.jpg',
        location: 'Chicago'
      }
    ]) */
  }

  public openDialog(home: any) {
    this.dialogService.open(BookComponent, {
      width: '250px',
      data: {}
    });
  }

}
