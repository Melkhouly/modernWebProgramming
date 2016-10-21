import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { CalculatePrice } from './calculateprice.pipe';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent, CalculatePrice
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { 




}
