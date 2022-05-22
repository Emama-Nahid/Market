import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'', component: DashComponent},
  {path:'dash', component: DashComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'products', component: ProductsComponent},
  {path:'update', component: ProductupdateComponent},
  {path:'addproduct', component: AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
