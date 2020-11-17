import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component'; 
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HomeComponent } from './menu/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { HelpComponent } from './menu/help/help.component';
import { E404Component } from './menu/e404/e404.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
const routes: Routes = [
  { path: "", redirectTo:"/users/list", pathMatch: "full"},
  { path: "login", component: UserLoginComponent},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "help", component: HelpComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



