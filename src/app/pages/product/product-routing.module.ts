import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ProductRegisteringComponent} from './product-registering/product-registering.component';
import {PagesComponent} from '../pages.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCategoryComponent} from './product-category/product-category.component';
import {ProductComponent} from './product.component';

const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children: [
    {
      path: 'registering',
      component: ProductRegisteringComponent,
    },
    {
      path: 'list',
      component: ProductListComponent,
    },
    {
      path: 'category',
      component: ProductCategoryComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {
}
