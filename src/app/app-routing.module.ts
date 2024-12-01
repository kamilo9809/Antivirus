import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { OurteamComponent } from './components/pages/ourteam/ourteam.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PrivateComponent } from './components/pages/private/private/private.component';
import { UserComponent } from './components/pages/private/private/user/user.component';
import { AdminComponent } from './components/pages/private/private/admin/admin.component';
import { NewsComponent } from './components/pages/private/private/user/news/news.component';
import { authGuard } from './guards/auth.guard';
import { ConfigComponent } from './components/pages/private/private/admin/config/config.component';
import { ListUsersComponent } from './components/pages/private/private/admin/config/pages/list-users/list-users.component';
import { ListOpportunityComponent } from './components/pages/private/private/admin/config/pages/list-opportunity/list-opportunity.component';
import { ListBootcampComponent } from './components/pages/private/private/admin/config/pages/list-bootcamp/list-bootcamp.component';
import { ListInstitutionComponent } from './components/pages/private/private/admin/config/pages/list-institution/list-institution.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'private',
    component: PrivateComponent,
    //canActivate:[authGuard],
    children: [
      {
        path: 'user',
        component: UserComponent,
        children: [
          { path: 'news', component: NewsComponent }
        ],
      },
      { path: 'admin', 
        component: AdminComponent, 
        children:[
          { path: 'config', component: ConfigComponent,
            children:[
              { path: 'list-user', component: ListUsersComponent },
              { path: 'list-opportunity', component: ListOpportunityComponent },
              { path: 'list-bootcamp', component: ListBootcampComponent },
              { path: 'list-institution', component: ListInstitutionComponent },
              { path: '**', redirectTo:'list-user', pathMatch:'full' },
            ]
          },
          { path: '**', redirectTo:'config', pathMatch:'full' },
        ]
      },
    ],
  },

  { path: 'ourteam', component: OurteamComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
