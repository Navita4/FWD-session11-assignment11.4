import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import {CricketerService} from './app/services/cricketer.service';
import {ICricketList,ICricketerModel} from './interface/cricketer-list';
import {IPlayerType} from 'app/interface/player-type';
import {CricketerDropDownService} from 'app/services/cricketer-drop-down.service';
declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './cricketer-app.component.html',
  styleUrls: ['./cricketer-app.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  providers:[CricketerService]
})
export class AppComponent implements OnInit {
/** Public variables */
cricketersArray:ICricketList[]=[];
playerType:IPlayerType[]=[];
cricketerModel:ICricketerModel;
cricketerDetail:ICricketList;

// using constructor call the cricketService
constructor(private _cricketService:CricketerService,private _cricketerDropDown:CricketerDropDownService){}

ngOnInit(){
  /** Define values */
  this.cricketerModel={
    firstName:'',
    lastName:'',
    favShot:'',
    playerType:''
  };
  this.playerType=this._cricketerDropDown.getPlayerType
}
/** add a cricket */
addCricketer(values){
  values:{
    // favshot:'';
    // firstName:'';
    // lastName:'';
    // playerType:''
  }
  this.cricketerDetail={
    firstName:values.firstName,
    lastName:values.lastName,
    favShot:values.favShot,
    batsmanBowler:values.playerType,

  };

  // call function from service
  this._cricketService.addCricketer(this.cricketerDetail);

  // using 3 rd party liabrary to show message
  alertify.notify('Cricketer Added Successfully',Success,3);
  this.cricketersArray=this._cricketService.getCricket();

};
/** Reset Form */
resetForm(f){
  f.reset();
};
}























}
