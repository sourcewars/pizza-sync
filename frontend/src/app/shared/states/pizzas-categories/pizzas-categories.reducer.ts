import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as PizzasCategoriesActions from 'app/shared/states/pizzas-categories/pizzas-categories.actions';
import {
  IPizzaCategoryCommon,
  IPizzasCategoriesTable,
} from 'app/shared/states/pizzas-categories/pizzas-categories.interface';

export const pizzasCategoriesAdapter: EntityAdapter<
  IPizzaCategoryCommon
> = createEntityAdapter<IPizzaCategoryCommon>();

export function pizzasCategoriesInitState(): IPizzasCategoriesTable {
  return pizzasCategoriesAdapter.getInitialState();
}

export function pizzasCategoriesReducer(
  pizzasCategoriesTbl = pizzasCategoriesInitState(),
  action: PizzasCategoriesActions.All
): IPizzasCategoriesTable {
  switch (action.type) {
    case PizzasCategoriesActions.LOAD_PIZZAS_CATEGORIES_SUCCESS: {
      return {
        ...pizzasCategoriesTbl,
        ...action.payload,
      };
    }

    default:
      return pizzasCategoriesTbl;
  }
}
