import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component'; 
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HomeComponent } from './menu/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { HelpComponent } from './menu/help/help.component';
import { E404Component } from './menu/e404/e404.component';
import { RequestComponent } from './menu/request/request.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { LineitemComponent } from './menu/lineitem/lineitem.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';



const routes: Routes = [
  { path: "", redirectTo:"/users/list", pathMatch: "full"},
  { path: "login", component: UserLoginComponent},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "help", component: HelpComponent },
  { path: "products/list", component: ProductListComponent },
  {path: "products/create", component: ProductCreateComponent},
  {path: "products/edit", component: ProductEditComponent},
  {path: "products/detail", component: ProductDetailComponent},
  { path: "request/list", component: RequestComponent },
  { path: "vendors/list", component: VendorListComponent },
  { path: "vendors/edit/:id", component: VendorEditComponent },
  { path: "vendors/create", component: VendorCreateComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "lineitem/list", component: LineitemComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/create", component: UserCreateComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



