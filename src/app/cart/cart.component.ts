import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../products";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();
  storage = new BehaviorSubject<Product>(JSON.parse(localStorage.getItem("id")!))

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  getProduct():Observable<Product>{
    return this.storage.asObservable();
  }

  setProduct(product:Product){
    if (product){
      localStorage.setItem("product", JSON.stringify(product))
    }
    this.storage.next(product);
  }
  onSubmit(): void {

    for (var i = 0; i < this.items.length; i++){
      this.setProduct(this.items[i])
    }

    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
