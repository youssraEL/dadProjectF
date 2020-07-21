/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesMenu } from './pages-menu';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { NbMenuModule } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';
import {ToastrModule} from 'ngx-toastr';
import {ProductModule} from './product/product.module';
import {ClientModule} from './client/client.module';
import {FournisseurModule} from './fournisseur/fournisseur.module';
import {OrdersModule} from './orders/orders.module';
import {OrderdetailModule} from './orderdetail/orderdetail.module';
import {StockModule} from './stock/stock.module';
import {CommandModule} from './command/command.module';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    StockModule,
    CommandModule,
    ThemeModule,
    DashboardModule,
    ClientModule,
    FournisseurModule,
    ProductModule,
    OrdersModule,
    OrderdetailModule,
    ECommerceModule,
    NbMenuModule,
    MiscellaneousModule,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,

  ],
  providers: [
    PagesMenu,
  ],
})
export class PagesModule {
}
