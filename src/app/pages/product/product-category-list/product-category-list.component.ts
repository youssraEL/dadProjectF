import { Component, OnInit } from '@angular/core';
import {ProductCategory} from '../../../@core/backend/common/api/ProductCategory';
import {ProductCategoryService} from '../../../@core/backend/common/services/ProductCategory.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ngx-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss'],
  providers: [ProductCategoryService],
})
export class ProductCategoryListComponent implements OnInit {
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
      categoryName: {
        title: 'Category Name',
        type: 'string',
      },
      categoryDescription: {
        title: 'Category Description',
        type: 'string',
      },
    },
  };
  productCategory: ProductCategory = new ProductCategory();
  submitted = false;
  source: any;
  constructor(private service: ProductCategoryService ,
              public dialogRef: MatDialogRef<ProductCategoryListComponent>) { }

  ngOnInit() {
  this.service.getAll().subscribe(data => {
  this.source = data;
});
}
  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.service.delete(event.data.id).subscribe( data => {});
    } else {
      event.confirm.reject();
    }
  }

  create(event): any {
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe( data => {});
  }

  edit(event: any) {
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe( data => {
    });
  }
}
