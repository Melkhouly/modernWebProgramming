import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
 // moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'app/products.component..html',
  styleUrls: [ 'app/products.component.css' ]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private router: Router,
    private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}

