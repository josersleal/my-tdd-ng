import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  public homes$: any;
  constructor() { }

  ngOnInit() {
    this.homes$ = of([
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
    ])
  }

}
