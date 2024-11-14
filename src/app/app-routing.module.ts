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

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate:[authGuard],
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
          { path: 'config', component: ConfigComponent}
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
