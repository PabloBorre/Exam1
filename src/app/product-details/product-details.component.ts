import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { Product, products } from '../products';
import {CurrencyPipe, NgIf} from "@angular/common";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {

  @Input() products!: Product;

  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  ngOnInit() {
    // First get the product id from the current route.

    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product | undefined) {
    this.cartService.addToCart(product);
    console.log(product)
    window.alert('Your product has been added to the cart!');
  }

}
