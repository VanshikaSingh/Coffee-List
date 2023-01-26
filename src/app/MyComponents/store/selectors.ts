import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoffeeStateInterface } from '../types/coffeeState.interface';

const getCoffeeState =
  createFeatureSelector<CoffeeStateInterface>('coffeeList');
export const getCoffees = createSelector(
  getCoffeeState,
  (state: CoffeeStateInterface) => {
    return state.coffeeList;
  }
);
