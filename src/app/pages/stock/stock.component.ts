import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreatStockComponent} from './creat-stock/creat-stock.component';
import {UsersService} from '../../@core/mock/common/users.service';

@Component({
  selector: 'ngx-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  providers: [MatDialog , UsersService],
})
export class StockComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  popupRegister() {
    const dialogRef = this.dialog.open(CreatStockComponent, {
      width: '900px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
    });
  }
}
