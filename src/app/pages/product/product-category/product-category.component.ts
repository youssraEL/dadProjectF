import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductCategory} from '../../../@core/backend/common/api/ProductCategory';
import {ProductCategoryService} from '../../../@core/backend/common/services/ProductCategory.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
  providers: [ProductCategoryService],
})
export class ProductCategoryComponent implements OnInit {

  productCategory: ProductCategory = new ProductCategory();
  registerForm: FormGroup;
  submitted = false;
  constructor(private service: ProductCategoryService , private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ice: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
    });
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.service.create(this.productCategory).subscribe(data => {
    });
    // this.toastr.success('The process has been saved.', 'Success');
    // this.init();
    // display form values on success
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


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
        title: 'Product',
        type: 'string',
        editable: false,
      },
      categoryDescription: {
        title: 'Product reference',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.service.delete(event.data.id).subscribe();
    } else {
      event.confirm.reject();
    }
  }

  create(event) {
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe( data => {});
  }

  edit(event: any) {
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe( data => {
    });
  }

  onRowSelect($event: any) {
    this.service = $event.data;
  }
}