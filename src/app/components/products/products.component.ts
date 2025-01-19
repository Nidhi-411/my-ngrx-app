import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncService } from '../../services/func.service';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { addProduct } from '../../store/product.action';
import { Product } from '../../store/product.reducer';
import { Observable } from 'rxjs';
import { selectProductList } from '../../store/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {

  

  pList$ : Observable<any[]> ;

  products: Product[] = [];
  
  

  constructor(private store : Store<AppState> , private funcService: FuncService ) {
     debugger;
    this.pList$ = this.store.select(selectProductList);
    this.pList$.subscribe(data => {
      console.log(' Updated Product List:', data);
    });
  
  }
 
  ngOnInit(): void {
    this.getProducts();  

    
  }

  // Fetch all products
  getProducts(): void {
    this.funcService.getProducts().subscribe((data) => {
      this.products = data; 
    });
  }

  addToCart(product : any){
    console.log('add to cart fn called ');
    console.log('and param is ' , product);
    
    this.store.dispatch(addProduct( {product}));
    
  }

}
