import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './compenents/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import {RouterModule, Routes} from "@angular/router";
import { ProductCategoryMenuComponent } from './compenents/product-category-menu/product-category-menu.component';
import { SearchComponent } from './compenents/search/search.component';
import { ProductDetailsComponent } from './compenents/product-details/product-details.component';

const routes: Routes =[
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'search/:keyword',component:ProductListComponent},
  {path:'category/:id/:name',component:ProductListComponent},
  {path:'category',component:ProductListComponent},
  {path:'products',component:ProductListComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'**',redirectTo:'/products',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
