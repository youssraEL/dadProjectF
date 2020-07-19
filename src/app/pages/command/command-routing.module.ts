import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommandRegistringComponent} from './command-registring/command-registring.component';
import {PagesComponent} from '../pages.component';
import {CommandListComponent} from './command-list/command-list.component';
import {CommandComponent} from './command.component';

const routes: Routes = [{
  path: '',
  component: CommandComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandRoutingModule {
}
