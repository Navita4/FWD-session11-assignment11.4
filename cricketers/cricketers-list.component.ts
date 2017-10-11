import {ICricketList} from './../interface/cricketer-list';
import {Component,OnInit,Input} from '@angular/core';
@Component({
    selector:'app-cricketers-list',
    templateUrl:'./cricketers-list.component.html',
    styleUrls:['./cricketers-list.component.css']

})
export class cricketerComponent implements OnInit{
/** get cricketerDetail from cricketer-app */

@Input() cricketerDetail;
imgurl="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg";
cricketerList:ICricketList;
constructor(){}
ngOnInit(){}
}