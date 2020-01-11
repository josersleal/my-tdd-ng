import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('When starting', () => {
    it('then it should create', () => {
      expect(component).toBeTruthy();
    });

    it('Then it shows the logo', () => {
      const logo = fixture.nativeElement.querySelector('[data-test="logo"]');
      expect(logo).toBeTruthy();
    });

    it('Then it shows the search', () => {
      const logo = fixture.nativeElement.querySelector('[data-test="search"]');
      expect(logo).toBeTruthy();
    });

    it('Then it shows the menu', () => {
      const logo = fixture.nativeElement.querySelector('[data-test="menu"]');
      expect(logo).toBeTruthy();
    });

    it('Then it shows the filters', () => {
      const logo = fixture.nativeElement.querySelector('[data-test="logo"]');
      expect(logo).toBeTruthy();
      const dates = fixture.nativeElement.querySelector('[data-test="dates"]');
      expect(dates).toBeTruthy();
      const guests = fixture.nativeElement.querySelector('[data-test="guests"]');
      expect(guests).toBeTruthy();
      const homeType = fixture.nativeElement.querySelector('[data-test="home-type"]');
      expect(homeType).toBeTruthy();
      const amenities = fixture.nativeElement.querySelector('[data-test="amenities"]');
      expect(amenities).toBeTruthy();
    });
  });



});
