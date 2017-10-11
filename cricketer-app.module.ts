import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {CricketerComponent} './cricketers/cricketers-list.component';

import { AppComponent } from './cricketer-app.component';
import {MyHighlighterDirective} from './app/directive/my-highlighter.directive';
import {CricketerDropDownService} from 'app/services/cricketer-drop-down.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HttpModule,
    CricketerComponent,
    MyHighlighterDirective,
    CricketerDropDownService,
    FormsModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CricketerDropDownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
