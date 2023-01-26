import { Coffee } from './coffee.interface';

export interface CoffeeStateInterface {
  isLoading: boolean;
  coffeeList: Coffee[];
  error: string | null;
}