import { Component } from '@angular/core';
import { CalculatePrice } from './calculateprice.pipe';

@Component({
  selector: 'my-app',
  template: `
  <h2>{{product.name}}</h2>
  <span>Total price : {{product.price }}
  
`,
pipes:[CalculatePrice]

})



export class AppComponent {
  product=
    {id:1,name:'Phones',price:200,qty:20}
  
}