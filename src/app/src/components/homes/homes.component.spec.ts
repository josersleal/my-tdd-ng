import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';
import { spyOnClass } from 'jasmine-es6-spies';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs/internal/observable/of';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: DataService; // = jasmine.SpyObj<DataService>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomesComponent],
      providers: [DataService]
      // providers: [{ provide: DataService, useFactory: () => spyOnClass(DataService) }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
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
    fit('Then it shows homes (mocked)', () => {

      const homeData = [
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
      ];
      spyOn(dataService, 'getHomes$').and.returnValue(of(homeData));

      // fixture.detectChanges();
      let result;
      dataService.getHomes$()
        .subscribe((res) => {
          result = res;
        });
      expect(result).toEqual(homeData);
      const elHome = fixture.nativeElement.querySelectorAll('[data-test="home"]');
      expect(dataService.getHomes$).toHaveBeenCalled();

      // expect(elHome.length).toBe(3);


    });
    it('Then shows homes details', () => {

      const elHome = fixture.nativeElement.querySelector('[data-test="home"]'); // as HTMLElement;
      console.log(JSON.stringify(elHome));

      const title = elHome.querySelector('[data-text="title"]');
      expect(title.innerText).toContain('Home 1');
      const image = elHome.querySelector('[data-text="image"]');
      expect(image.innerText).toContain('listing1.jpg');
      const location = elHome.querySelector('[data-text="location"]');
      expect(location.innerText).toContain('New York');
    });

  });
});
