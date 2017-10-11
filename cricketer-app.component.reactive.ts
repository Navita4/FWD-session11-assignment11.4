import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {CricketerService} from 'app/services/cricketer.service';
import {ICricketList , ICricketModel} from './interface/cricketer-list';
import {IPlayerType} from 'app/interface/player-type';
import {CricketerDropDownService} from 'app/services/cricketer-drop-down.service';
import {FormGroup ,FormControl,Validators ,FormBuilder} from '@angular/forms';

declare const alertify:any;
@Component({
    selector:'app-root',
    templateUrl:'./cricketer-app.component.reactive.html',
    styleUrls:['./cricketer-app.component.css'],
    encapsulation:ViewEncapsulation.Emulated,
    providers:[CricketerService]
})
export class AppComponent implements OnInit{
    // public variable
    cricketersArray:ICricketList[]=[];
    playerType:IPlayerType[]=[];
    cricketerModel:ICricketerModel;
    cricketerDetail:ICricketList;

    /** declaring myform of type FormGroup 
     * myForm:FormGroup;
     * explicitely declaring LastName
     */
    lastName =new FormControl('', [Validators.pattern('^[a-zA-z]*$'), Validators.required ,Validators.minLength(2)]);

    // Using constructor call cricketService
    // This shorthand syntax automatically creates and initializes a new private members in the class

    constructor(private _cricketService:CricketerService , private _cricketerDropDown:CricketerDropDownService,
    private fb:FormBuilder){}

    ngonInit(){
        /** Using formGroup
         *  Creating instance of formGroup & passing object
         * with key value pair
         */
        //this.myForm=new FormGroup({
            FirstName:new FormControl(''),
            LastName:this.lastName
        });

        /** using FormBuilder */

        this.myForm=this.fb.group({
            'firstName':['', Validators.compose([Validators.required , Validators.minLength(2)])],
            'lastName':this.lastName,
            'favShot':'pull-drive',
            'playerType':['', Validators.required]
        });


        /** set values */
        // this.myForm.setValue({
            // 'Firstname':'Sachin',
            // 'LastNAme':'Tendulkar',
            // 'favShot':'pull-drive',
            // 'playerType':'Batsman'
       // });

       /**  patch value */
       // this.myForm.patchvalue({
           // 'Firstname':'Sachin',
            // 'LastNAme':'Tendulkar',
            // 'favShot':'pull-drive',

      // });

      this.playerType=this._cricketerDropDown.getPlayerType();

 }
 /** Reset a form  */
 resetForm(){
     this.myform.reset();
 };
 /** Add a cricket */
 addCricketer(values){
     this.cricketerDetail={

        FirstName:values.firstName,
        lastName:values.lastName,
        favShot:values.favShot,
        BatsmanBowler:values.playerType
     };

     /** call function from service */
      this.cricketService.addCricketer(this.cricketerDetail);
      // using 3rd party liabrary to show message

      alertify.notify('cricketer added successfully', success,3);
       this.cricketersArray=this._cricketService.getCricket();
 }
}




















}
