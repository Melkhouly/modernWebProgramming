import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `<h3>Top Products</h3>
<div class="grid grid-pad">
  <div *ngFor="let product of products" (click)="gotoDetail(product)" class="col-1-4">
    <div class="module product">
      <h4>{{product.name}}</h4>
    </div>
  </div>
</div>
`,
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,private router: Router,) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products.slice(1, 5));
  }

  gotoDetail(product: Product): void {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }
}
