import { InjectionToken } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct } from './product.action';

export interface Product {
    category:string;
    description:string;
    id: number;
    image:string;
    price: number;
    rating : {
        count : number,
        rate : number
    };
    title : string;
  }

export interface ProductState {
  productList: Product[]; // Array to hold product items
}
debugger;
console.log('is hrer any issue')
export const initialPList: ProductState = {

  productList:[],
};

// Reducer function
export const reducer = createReducer(
  initialPList,

  // Handle adding a product
//   on(addProduct, (state, { product }) => ({
//     ...state,
//     productList: [...state.productList, product], // Add the product to the array
    
//   })),
on(addProduct, (state, { product }) => {
    console.log('Reducer Add Product:', product);
    return {
      ...state,
      productList: [...state.productList, product],
    };
  }),

  // Handle removing a product
  on(removeProduct, (state, { productId }) => ({
    ...state,
    productList: state.productList.filter(
      (product) => product.id !== productId // Remove product by ID
    ),
  }))
);

// InjectionToken for DI (optional, depending on app setup)
export const PRODUCT_REDUCER_TOKEN = new InjectionToken('Product Reducer', {
  factory: () => reducer,
});
