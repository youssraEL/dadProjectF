import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../@core/backend/common/services/Product.service';
import {ProductCategoryService} from '../../@core/backend/common/services/ProductCategory.service';
import {ProductRegisteringComponent} from './product-registering/product-registering.component';
import {UsersService} from '../../@core/mock/common/users.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ProductCategoryComponent} from './product-category/product-category.component';
import {ProductCategoryListComponent} from './product-category-list/product-category-list.component';
@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MatDialog , UsersService],

})
export class ProductComponent implements OnInit {

  constructor(private dialog: MatDialog , private userService: UsersService , private router: Router) { }

  ngOnInit() {
  }

  popupRegister() {
    const dialogRef = this.dialog.open(ProductRegisteringComponent, {
      width: '900px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
    });
  }

  popupRegisterCategory() {
    const dialogRef = this.dialog.open(ProductCategoryComponent, {
      width: '900px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
    });
  }

  List() {
    const dialogRef = this.dialog.open(ProductCategoryListComponent, {
      width: '900px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
    });
  }
}
