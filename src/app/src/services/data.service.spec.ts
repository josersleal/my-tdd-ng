import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
// import { homedir } from 'os';

describe('DataService', () => {
  let httpClient: HttpClient;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('Then returns the ist of homes', () => {
    // Spy
    httpClient = TestBed.get(HttpClient);

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

    spyOn(httpClient, 'get').and.returnValue(of(homeData));


    const dataService: DataService = TestBed.get(DataService);

    const spy = jasmine.createSpy('spy');
    dataService.getHomes$().subscribe(spy);


    expect(spy).toHaveBeenCalledWith(homeData);

    // Verify service is called with proper http endpoint

    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
