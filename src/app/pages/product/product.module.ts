import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisteringComponent } from './product-registering/product-registering.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NbCardModule} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  declarations: [ProductRegisteringComponent, ProductListComponent, ProductCategoryComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
})
export class ProductModule { }
