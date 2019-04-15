import { Product } from './model/product';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // products: Promise<Product[]>;
  products: Product[] = [];
  constructor(private productsService: ProductsService) {
  }

  async ngOnInit() {
    console.log(1);
    this.loadProducts();
    console.log(4);
  }

  async loadProducts() {
    console.log(2);
    this.products = await this.productsService.getProducts();
    console.log(3);
  }

}
