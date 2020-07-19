import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatStockComponent } from './creat-stock/creat-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { StockComponent } from '../stock/stock.component';
import {NbCardModule, NbSelectModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [CreatStockComponent, ListStockComponent, StockComponent],
  imports: [
    CommonModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbSelectModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [CreatStockComponent, ListStockComponent, StockComponent],
})
export class StockModule { }
