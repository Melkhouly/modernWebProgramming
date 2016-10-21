import {Pipe,PipeTransform} from '@angular/core'


@Pipe({name:'calculatePrice'})
export class CalculatePrice implements PipeTransform{

    transform(value:Number ,args:String ){
        if(value)
        console.log(args)
    var qty= +args;
    var total=+value*qty;
    console.log("qty"+qty)
    console.log("value"+value)
        return  total;

    }

}