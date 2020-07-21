import { Component, OnInit } from '@angular/core';
import {ProductCategoryComponent} from '../product/product-category/product-category.component';
import {MatDialog} from '@angular/material/dialog';
import {UsersService} from '../../@core/mock/common/users.service';
import {ClientregisterComponent} from './clientregister/clientregister.component';

@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [MatDialog , UsersService],
})
export class ClientComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  popupRegister() {
    const dialogRef = this.dialog.open(ClientregisterComponent, {
      width: '900px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
    });
  }
}
