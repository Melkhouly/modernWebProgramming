import { Component, Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  //moduleId: module.id,
  selector: 'my-product-detail',
  templateUrl:'app/product-detail.component.html'
})

//export class ProductDetailComponent implements OnInit {
  export class ProductDetailComponent{
  @Input()
  product: Product;

  goBack(): void {
    this.location.back();
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productService.getProduct(id)
        .then(product => this.product = product);
    });
  }

}