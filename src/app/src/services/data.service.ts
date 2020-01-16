import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getHomes$(): any {
    return this.httpClient.get<any>('assets/homes.json');
  }

  bookHome$(home: any) {
    return of([]); // this.httpClient.post('https://www.mocky.io/v2/5185415ba171ea3a00704eed', {});
  }
}
