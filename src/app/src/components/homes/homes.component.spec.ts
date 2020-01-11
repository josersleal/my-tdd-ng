import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('When starting', () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    fit('Then shows homes', () => {
      const elHome = fixture.nativeElement.querySelectorAll('[data-test="home"]');

      expect(elHome.length).toBe(3);
    });
  });
});
