import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: any;

  const el = (selector) => fixture.nativeElement.querySelector(selector);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    dialogData = TestBed.get(MAT_DIALOG_DATA);
    const homeData = require('../../../../assets/homes.json');
    dialogData.home = homeData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Given a dialog is open', () => {


    it('Then it shows the title', () => {

      const title = el('[data-test="title"]');
      console.log(title);
      expect(title.textContent).toContain('Home 1');
    });

    it('Then it shows the price', () => {

      const price = el('[data-test="price"]');

      expect(price.textContent).toContain('$125 per night');
    });


    it('Then it shows the check in date', () => {

      const checkIn = el('[data-test="check-in"]');

      expect(checkIn).toBeTruthy();
    });

    it('Then it shows the check out date', () => {

      const checkOut = el('[data-test="check-out"]');

      expect(checkOut).toBeTruthy();
    });

    it('Then it shows total', () => {

      // Arrange
      const checkIn = el('[data-test="check-in"] input');
      const checkOut = el('[data-test="check-out"] input');
      const total = el('[data-test="total"]');

      // Act
      // enter check in 12/20/19
      checkIn.value = '12/20/19';
      checkIn.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // enter check out 12/23/19
      checkOut.value = '12/23/19';
      checkOut.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // Assert
      // total shows 3x125=375
      expect(total.textContent).toContain(375);

    });

    // Then clicking button book books a home
  });


});
