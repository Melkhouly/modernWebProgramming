import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Product }                from './product';
import { ProductService }         from './product.service';
@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: [ 'products.component.css' ]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedHero: Product;
  constructor(
    private productService: productService,
    private router: Router) { }
  getProducts(): void {
    this.productService
        .getProducts()
        .then(products => this.products = products);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name)
      .then(product => {
        this.products.push(hero);
        this.selectedProduct = null;
      });
  }
  delete(product: Product): void {
    this.productService
        .delete(product.id)
        .then(() => {
          this.products = this.products.filter(h => h !== product);
          if (this.selectedProduct === product) { this.selectedProduct = null; }
        });
  }
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(hero: Hero): void {
    this.selectedProduct = product;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
