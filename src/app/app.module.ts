import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { reducer } from './store/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({},{}),
  ],
  providers: [
    provideStore(),
    provideState({name:'product' , reducer:reducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
