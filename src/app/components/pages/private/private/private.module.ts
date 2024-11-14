import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { AdminModule } from "./admin/admin.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PrivateComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserModule,
    AdminModule,
    RouterModule
],
})
export class PrivateModule { }
