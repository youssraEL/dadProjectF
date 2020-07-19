import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RegestringComponent } from './regestring/regestring.component';
import { ListComponent } from './list/list.component';
import {NbCardModule, NbDatepickerModule, NbSelectModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrdersRoutingModule} from './orders-routing.module';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [OrdersComponent, RegestringComponent, ListComponent],
  imports: [
    RouterModule,
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FormsModule,
    OrdersRoutingModule,
    NgSelectModule,
    NbSelectModule,
    NbDatepickerModule,
  ],
})
export class OrdersModule { }
