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

    it('Then shows homes', () => {
      const elHome = fixture.nativeElement.querySelectorAll('[data-test="home"]');

      expect(elHome.length).toBe(3);
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
