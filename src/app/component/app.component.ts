import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductAlertsComponent} from "../product-alerts/product-alerts.component";
import { HttpClientModule } from '@angular/common/http';
import {CartComponent} from "../cart/cart.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {ProvidersComponent} from "../providers/providers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ProductListComponent,
    ProductAlertsComponent,
    HttpClientModule, CartComponent,
    ProductDetailsComponent, TopBarComponent,
    ProvidersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular1';
}
