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
}
