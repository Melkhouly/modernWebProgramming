import {Pipe,PipeTransform} from '@angular/core'

@Pipe({name:'calculatePrice'})
export class CalculatePrice implements PipeTransform{

    transform(value:Number ,args:Number  []){
        if(value)

        return  value;

    }

}