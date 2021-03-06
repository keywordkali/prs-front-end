import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from '../app/user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserSearchPipe } from './user/user-search.pipe';
import { AboutComponent } from './menu/about/about.component';
import { SortPipe } from './pipes/sort.pipe'
import { UserLoginComponent } from './user/user-login/user-login.component';
import { BoolDisplayPasswordPipe} from './pipes/bool-display-password.pipe'
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { HomeComponent } from './menu/home/home.component';
import { HelpComponent } from './menu/help/help.component';
import { E404Component } from './menu/e404/e404.component';
import { ProductComponent } from './menu/product/product.component';
import { LineitemComponent } from './menu/lineitem/lineitem.component';
import { VendorComponent } from './menu/vendor/vendor.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { RequestComponent } from './menu/request/request.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestReviewLineComponent } from './request/request-review-line/request-review-line.component';
import { LineitemCreateComponent } from './lineitem/lineitem-create/lineitem-create.component';
import { LineitemEditComponent } from './lineitem/lineitem-edit/lineitem-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    UserListComponent,  
    UserDetailComponent,
    UserCreateComponent,
    UserSearchPipe,
    UserLoginComponent,
    AboutComponent,
    SortPipe,
    BoolDisplayPasswordPipe,
    BoolDisplayPipe,
    MenuComponent,
    MenuitemComponent,
    HomeComponent,
    HelpComponent,
    E404Component,
    LineitemComponent,
    VendorComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorSearchPipe,
    ProductComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductSearchPipe,
    RequestComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestLinesComponent,
    RequestReviewComponent,
    LineitemCreateComponent,
    LineitemEditComponent,
    RequestReviewLineComponent
    
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
