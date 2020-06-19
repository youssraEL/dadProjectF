import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandRegistringComponent } from './command-registring/command-registring.component';
import { CommandListComponent } from './command-list/command-list.component';
import {CommandRoutingModule} from './command-routing.module';
import { CommandComponent } from '../command/command.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {NbCardModule, NbDatepickerModule, NbSelectModule} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CommandRegistringComponent, CommandListComponent, CommandComponent],
  imports: [
    CommonModule,
    CommandRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbSelectModule,
    NbDatepickerModule,
  ],
})
export class CommandModule { }
