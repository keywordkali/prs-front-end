import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from '../app/user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AboutComponent } from './menu/about/about.component';
import { SortPipe } from './pipes/sort.pipe'
import { UserSearchPipe } from './user/user-search.pipe';
import { BoolDisplayPasswordPipe} from './pipes/bool-display-password.pipe'
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { HomeComponent } from './menu/home/home.component';
import { HelpComponent } from './menu/help/help.component';
import { E404Component } from './menu/e404/e404.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    UserListComponent,
    AboutComponent,
    SortPipe,
    UserSearchPipe,
    BoolDisplayPasswordPipe,
    BoolDisplayPipe,
    UserLoginComponent,
    MenuComponent,
    MenuitemComponent,
    HomeComponent,
    HelpComponent,
    E404Component,
    UserDetailComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
