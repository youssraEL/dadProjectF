import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientregisterComponent } from './clientregister/clientregister.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbCardModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [
    ClientComponent,
    ClientregisterComponent,
    ClientlistComponent],
  imports: [
    CommonModule,
    // ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
  entryComponents : [
    ClientComponent,
    ClientregisterComponent,
    ClientlistComponent,
  ],
})
export class ClientModule {

}
