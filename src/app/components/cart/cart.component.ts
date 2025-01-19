import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { selectProductList } from '../../store/product.selector';
import { addProduct, removeProduct } from '../../store/product.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  pList$ : Observable<any[]> ;

  constructor( private store : Store<AppState>){
     
       this.pList$ = this.store.select(selectProductList);

      
       this.pList$.subscribe(data => {
        console.log(' Updated Product List:', data);
      });
      
  }

  removeFromCart(productId : any){
   
    this.store.dispatch(removeProduct({productId}));
  }

}
