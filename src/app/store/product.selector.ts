import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

// Feature selector
export const selectProductState = createFeatureSelector<ProductState>('product');

// Product list selector
export const selectProductList = createSelector(
  selectProductState,
  (state: ProductState) => state.productList
);
