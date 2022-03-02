import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebFrontEnd';

  products: Array<Product> = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsActivate();
  }

  getProductsActivate() {
    this.productsService.getProductsActivate().subscribe(data => {
      this.products = data as Array<Product>;
    });
  }

  putProductDesactivate(ProductID: number) {
    if (!confirm("Esta seguro que desea eliminar este producto?"))
      return;
    this.productsService.putProductDesactivate(ProductID!).subscribe(res => {
      if (res == null) {
        this.getProductsActivate();
      }
    });
  }
}
