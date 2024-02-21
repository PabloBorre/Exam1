import { Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {ProvidersComponent} from "./providers/providers.component";

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
  {
    path: 'provider/:provider',
    component: ProvidersComponent,
    title: 'Providers'
  }
  ];

