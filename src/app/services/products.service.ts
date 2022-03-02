import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://localhost:44342/api/Product';

  constructor(private http: HttpClient) { }

  getProductsActivate() {
    return this.http.get(this.url + '/GetProductActivate');
  }

  getProductsDeactivate() {
    return this.http.get(this.url + '/GetProductDesactivate');
  }

  postProduct(product: Product) {
    return this.http.post(this.url + '/PostProduct', product);
  }

  putProduct(id: number, product: Product) {
    return this.http.put(this.url + '/PutProduct/' + id, product);
  }

  putProductDesactivate(id: number) {
    return this.http.put(this.url + '/PutProductDesactivate/' + id, { observe: 'response' });
  }

  putProductActivate(id: number) {
    return this.http.put(this.url + '/PutProductActivate/' + id, null);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + '/DeleteProduct/' + id);
  }
}
