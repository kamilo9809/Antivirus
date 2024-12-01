import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './config/components/table/table.component';
import { ListUsersComponent } from './config/pages/list-users/list-users.component';
import { RouterModule } from '@angular/router';
import { ListOpportunityComponent } from './config/pages/list-opportunity/list-opportunity.component';
import { ListBootcampComponent } from './config/pages/list-bootcamp/list-bootcamp.component';
import { ListInstitutionComponent } from './config/pages/list-institution/list-institution.component';



@NgModule({
  declarations: [
    ConfigComponent,
    SidebarComponent,
    TableComponent,
    ListUsersComponent,
    ListOpportunityComponent,
    ListBootcampComponent,
    ListInstitutionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ConfigComponent,
    SidebarComponent
  ]
})
export class AdminModule { }
