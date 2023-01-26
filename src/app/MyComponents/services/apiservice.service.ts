import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Coffee } from '../types/coffee.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}
  getdata(): Observable<Coffee[]> {
    return this._http
      .get<Coffee[]>(
        `https://random-data-api.com/api/coffee/random_coffee?size=50`
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
