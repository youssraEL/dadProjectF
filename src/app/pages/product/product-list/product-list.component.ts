import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {ProductService} from '../../../@core/backend/common/services/Product.service';

@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      productName: {
        title: 'Product',
        type: 'string',
        editable: false,
      },
      referenceProduct: {
        title: 'Product reference',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      productCategory: {
        title: 'Payement',
        type: 'string',
      },
      quantityInStock: {
        title: 'Stock',
        type: 'number',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(data => {
      this.source = data;
    });
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.source = data;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.productService.delete(event.data.id).subscribe();
    } else {
      event.confirm.reject();
    }
  }

  create(event) {
    event.confirm.resolve(event.newData);
    this.productService.create(event.newData).subscribe( data => {});
  }

  edit(event: any) {
    event.confirm.resolve(event.newData);
    this.productService.update(event.newData).subscribe( data => {
    });
  }

  onRowSelect($event: any) {
    this.productService = $event.data;
  }

}
