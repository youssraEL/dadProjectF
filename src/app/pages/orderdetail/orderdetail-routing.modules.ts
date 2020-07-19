import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegestringComponent} from './regestring/regestring.component';
import {ListComponent} from './list/list.component';
import {OrderdetailComponent} from './orderdetail.component';

const routes: Routes = [{
  path: '',
  component:  OrderdetailComponent,
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
export class OrderdetailRoutingModules {
}
