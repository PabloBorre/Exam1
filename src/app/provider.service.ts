import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import { Provider } from './Model/Provider';


@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  constructor(
    private http: HttpClient
  ) {}

  getListProvider(): Observable<Provider[]>{
  return this.http.get<Provider[]>(`assets/providers.json`);
}
getProviderName(name: string): Observable<Provider | undefined>{
  return this.getListProvider().pipe(
    map(providers => providers.find(provider => provider.name === name))
  );
}
}
