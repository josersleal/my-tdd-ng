import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';
import { spyOnClass } from 'jasmine-es6-spies';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogService } from '../../services/dialog.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: DataService; // = jasmine.SpyObj<DataService>();
  let dialogService: DialogService;
  let homeData: Array<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomesComponent],
      providers: [DataService, DialogService],
      imports: [HttpClientTestingModule, MatDialogModule]
      // providers: [{ provide: DataService, useFactory: () => spyOnClass(DataService) }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(DialogService);

    homeData = require('../../../../assets/homes.json');
    spyOn(dataService, 'getHomes$').and.returnValue(of(homeData));
    spyOn(dialogService, 'open').and.stub();
    fixture.detectChanges();
  });
  describe('When starting', () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Then shows homes', () => {
      const elHome = fixture.nativeElement.querySelectorAll('[data-test="home"]');
      expect(elHome.length).toBe(3);
    });
    it('Then it shows homes (mocked)', () => {
      /*
            let result;
            dataService.getHomes$()
              .subscribe((res) => {
                result = res;
              });
            expect(result).toEqual(homeData); */
      const elHome = fixture.nativeElement.querySelectorAll('[data-test="home"]');
      expect(dataService.getHomes$).toHaveBeenCalled();
      expect(elHome.length).toBe(3);


    });

    it('Then shows homes details', () => {

      const elHome = fixture.nativeElement.querySelector('[data-test="home"]'); // as HTMLElement;


      const title = elHome.querySelector('[data-test="title"]');
      expect(title.innerText).toContain('Home 1');
      const image = elHome.querySelector('[data-test="image"]');
      expect(image).toBeTruthy();
      const location = elHome.querySelector('[data-test="location"]');
      expect(location.innerText).toContain('New York');
    });

    it('Then it shows a booking button', () => {

      const elHome = fixture.nativeElement.querySelector('[data-test="home"]');
      const btn = elHome.querySelector('[data-test="book-btn"]');

      expect(btn).toBeTruthy();
    });

    describe('When clicking the  Book button', () => {
      it('Then it shows a dialog  ', () => {

        // Arrange

        // grab the button
        const btn = fixture.nativeElement.querySelector('[data-test="home"] button');

        // Act
        // click the button
        btn.click();

        // Assert
        // assure dialog was opened via a service
        expect(dialogService.open).toHaveBeenCalled();

      });
    });
  });
});
