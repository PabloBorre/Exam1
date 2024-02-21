import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {Product} from "./products";


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(
    private http: HttpClient
  ) {}

  getListProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`assets/product.json`);
  }

  getProductName(id: number | undefined): Observable<Product | undefined>{
    return this.getListProduct().pipe(
      map(product => product.find(product => product.id === id))
    );
  }
}
