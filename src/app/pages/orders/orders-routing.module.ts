import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders.component';
import {RegestringComponent} from './regestring/regestring.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [{
  path: '',
  component:  OrdersComponent,
  children: [
    {
      path: 'registering',
      component:  RegestringComponent,
    },
    {
      path: 'list',
      component:  ListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
