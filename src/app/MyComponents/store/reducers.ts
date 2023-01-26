import { createReducer, on } from '@ngrx/store';
import { CoffeeStateInterface } from '../types/coffeeState.interface';
import * as CoffeeActions from './actions';

export const initialState: CoffeeStateInterface = {
  isLoading: false,
  coffeeList: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(CoffeeActions.setCoffeeList, (state: any, action) => {
    return {
      ...state,
      coffeeList: action.coffeeList,
    };
  }),
  on(CoffeeActions.getCoffeeList, (state) => {
    return {
      ...state,
    };
  })
);
