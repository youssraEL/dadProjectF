import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UsersService} from '../../@core/mock/common/users.service';
import {RegistringComponent} from './registring/registring.component';

@Component({
  selector: 'ngx-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss'],
  providers: [MatDialog , UsersService],
})
export class FournisseurComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  popupRegister() {
    const dialogRef = this.dialog.open(RegistringComponent, {
      width: '900px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
    });
  }
}
