import {Component, OnInit} from '@angular/core';
import {products} from "../products";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ProductAlertsComponent} from "../product-alerts/product-alerts.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterOutlet,
    ProductAlertsComponent,
    TopBarComponent,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
  }
}
