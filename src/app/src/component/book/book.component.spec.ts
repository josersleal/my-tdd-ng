import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { spyOnClass } from 'jasmine-es6-spies';

import { DataService } from '../../services/data.service';
import { BookComponent } from './book.component';
import { DialogService } from '../../services/dialog.service';


export class MatDialogRefMock {
  close = (params = '') => { }
}
describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: any;
  let dataService: DataService;
  let dialogService: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  // let dialogService: MatDialogRef<BookComponent>;


  const el = (selector: string) => fixture.nativeElement.querySelector(selector);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        },
        { provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef) },
        /*   {
            provide: MatDialogRef, useClass: MatDialogRefMock
          }, */
        DataService
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
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(MatDialogRef);
    spyOn(dataService, 'bookHome$').and.stub();
    // spyOn(dialogService, 'close').and.stub();

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

    it('Then clicking button book books a home', () => {

      // Arrange
      const checkIn = el('[data-test="check-in"] input');
      const checkOut = el('[data-test="check-out"] input');

      // Act
      // enter check in 12/20/19
      checkIn.value = '12/20/19';
      checkIn.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // enter check out 12/23/19
      checkOut.value = '12/23/19';
      checkOut.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // Click the button
      el('[data-test="btn-book"] button').click();

      // Assert
      // data service is called to book the home chosen

      expect(dataService.bookHome$).toHaveBeenCalled();

    });

    it('Then clicking button book closes the dialog', () => {

      // Arrange
      const checkIn = el('[data-test="check-in"] input');
      const checkOut = el('[data-test="check-out"] input');

      // Act
      // enter check in 12/20/19
      checkIn.value = '12/20/19';
      checkIn.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // enter check out 12/23/19
      checkOut.value = '12/23/19';
      checkOut.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // Click the button
      el('[data-test="btn-book"] button').click();

      // Assert
      // data service is called to book the home chosen

      expect(dialogService.close).toHaveBeenCalled();

    });
  });


});
