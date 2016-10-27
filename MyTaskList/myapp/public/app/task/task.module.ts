import { NgModule } from '@angular/core';
import {TaskComponent} from './task.component'
import{CommonModule} from "@angular/common"
import{TaskService} from './task.service';
import {HttpModule} from '@angular/http';
import {FormsModule }   from '@angular/forms';



@NgModule({
    imports:[CommonModule,HttpModule,FormsModule],
    declarations: [TaskComponent],
    providers:[TaskService],
    exports: [TaskComponent],
})
export class TaskModule {

}
