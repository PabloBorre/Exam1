import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../products";
import {ProviderService} from "../provider.service";
import { Provider } from '../Model/Provider';
import {ProductService} from "../product.service";
import {ProductDetailsComponent} from "../product-details/product-details.component";

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProductDetailsComponent,
    CurrencyPipe
  ],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent implements OnInit {

  provider : Provider | undefined;
  productos : Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private provideService: ProviderService,
    private productService: ProductService

  ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const providerName = String(routeParams.get('provider'));

    this.provideService.getProviderName(providerName).subscribe(provider => {
      this.provider = provider;

      if (provider){
       this.productService.getProductName(this.provider?.IdPhones).subscribe(productName => {
         if (productName){
            this.productos.push(productName);
         }

       })

      }
    })

  }

}
