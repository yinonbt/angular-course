import { Product } from './../model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  getProducts(): Promise<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products').toPromise();
  }

  constructor(private httpClient: HttpClient) {

  }
}

export class ProductsServiceMock {
  getProducts(): Promise<Product[]> {
    return new Promise<Product[]>((resolvePromise, rejectPromise) => {
      setTimeout(() => {
        try {
          const products: Product[] = [];
          for (let index = 1; index < 10; index++) {
            //   throw new Error('BASASDASDASDS');
            products.push({ id: index, name: 'Product NO.' + index, price: 1.8 * index });
          }
          resolvePromise(products);

        } catch (error) {
          rejectPromise(error);
        }
      }, 3000);

    });

  }
}
