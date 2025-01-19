import { createAction, props } from '@ngrx/store';
import { Product } from './product.reducer';
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>() // Payload is the product object
);

export const removeProduct = createAction(
  '[Product] Remove Product',
  props<{ productId: number }>() // Payload is the product ID
);
