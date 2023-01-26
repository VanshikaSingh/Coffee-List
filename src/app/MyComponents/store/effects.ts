import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import { ApiserviceService } from '../services/apiservice.service';
import { Coffee } from '../types/coffee.interface';
import { getCoffeeList, setCoffeeList } from './actions';

@Injectable()
export class CoffeeEffects {
  constructor(
    private actions$: Actions,
    private _apiservice: ApiserviceService
  ) {}

  getCoffees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCoffeeList),
      mergeMap((action) => {
        return this._apiservice.getdata().pipe(
          map((data: Coffee[]) => {
            return setCoffeeList({ coffeeList: data });
          })
        );
      })
    );
  });
}
