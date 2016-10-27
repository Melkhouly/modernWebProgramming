import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component'
import { TaskModule } from './task/task.module';





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TaskModule,



  ],
  declarations: [
    AppComponent, NavComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {




}
