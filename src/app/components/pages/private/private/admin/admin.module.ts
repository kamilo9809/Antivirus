import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';



@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ConfigComponent
  ]
})
export class AdminModule { }
