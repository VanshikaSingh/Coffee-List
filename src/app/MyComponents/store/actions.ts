import { createAction ,props} from "@ngrx/store";
import { Coffee } from "../types/coffee.interface";

export const getCoffeeList = createAction('getCoffee' );
export const setCoffeeList = createAction('setCoffee',props<{coffeeList:Coffee[]}>())
