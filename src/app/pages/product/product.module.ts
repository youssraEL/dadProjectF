import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisteringComponent } from './product-registering/product-registering.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbCardModule, NbSelectModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductRegisteringComponent,
    ProductListComponent,
    ProductCategoryComponent,
    ProductCategoryListComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
  ],
  entryComponents: [
    ProductComponent,
    ProductRegisteringComponent,
    ProductListComponent,
    ProductCategoryComponent,
    ProductCategoryListComponent,
  ],
})
export class ProductModule { }
