import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderdetailComponent } from './orderdetail.component';
import { ListComponent } from './list/list.component';
import { RegestringComponent } from './regestring/regestring.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbCardModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderdetailRoutingModules} from './orderdetail-routing.modules';

@NgModule({
  declarations: [OrderdetailComponent, ListComponent, RegestringComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    FormsModule,
    OrderdetailRoutingModules,
    ReactiveFormsModule,
  ],
})
export class OrderdetailModule { }
