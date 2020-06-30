import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurComponent } from './fournisseur.component';
import { RegistringComponent } from './registring/registring.component';
import { ListComponent } from './list/list.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbCardModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FournisseurComponent, RegistringComponent, ListComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents : [
    FournisseurComponent,
    RegistringComponent,
    ListComponent,
  ],
  exports: [  FournisseurComponent,
    RegistringComponent,
    ListComponent ],
})
export class FournisseurModule { }
