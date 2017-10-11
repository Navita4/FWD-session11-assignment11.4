import {Pipe , PipeTransform} from '@angular/core';
@Pipe({
    name:'orderBy',
    pure:false
})

export class OrderByPipe implements PipeTransform{
    onDestroy(){

    }

    transform(value:any,args:any[]):any{
        return value.sort(function (a,b)){
            let nameA=a.firstName === undefined?'Null':a.firstname.toLowerCase(),
            nameB=b.firstName === undefined?'Null':b.firstName.toLowerCase();

            if(nameA<nameB){
                // sorting string ascending
                return -1;

                if(nameA>nameB){
                    return 1;
                }
                return 0; // Default return value i.e. no sorting
            }
        }
    }
}