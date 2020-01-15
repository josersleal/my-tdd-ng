import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  public homes$: any;
  // dataService: DataService;
  constructor(private dataService: DataService) { }

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

}
