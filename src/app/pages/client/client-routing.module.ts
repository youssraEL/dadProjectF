

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ClientregisterComponent} from './clientregister/clientregister.component';
import {ClientlistComponent} from './clientlist/clientlist.component';
import {ClientComponent} from './client.component';

const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    {
      path: 'registering',
      component: ClientregisterComponent,
    },
    {
      path: 'list',
      component: ClientlistComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
