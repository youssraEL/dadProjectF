import { Component, OnInit } from '@angular/core';
import {ClientregisterComponent} from '../client/clientregister/clientregister.component';
import {MatDialog} from '@angular/material/dialog';
import {UsersService} from '../../@core/mock/common/users.service';
import {CommandRegistringComponent} from './command-registring/command-registring.component';

@Component({
  selector: 'ngx-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  providers: [MatDialog , UsersService],
})
export class CommandComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
  }
  popupRegister() {
    const dialogRef = this.dialog.open(CommandRegistringComponent, {
      width: '900px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
    });
  }
}
