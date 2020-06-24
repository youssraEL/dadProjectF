
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../@core/backend/common/services/Product.service';
import {Product} from '../../../@core/backend/common/api/Product';
import {ProductCategoryService} from '../../../@core/backend/common/services/ProductCategory.service';
import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UsersService} from '../../../@core/mock/common/users.service';


@Component({
  selector: 'ngx-product-registering',
  templateUrl: './product-registering.component.html',
  styleUrls: ['./product-registering.component.scss'],
  providers: [ProductService, ProductCategoryService  , UsersService],
})

export class ProductRegisteringComponent implements OnInit {


  product: Product = new Product();
  registerForm: FormGroup;
  submitted = false;
  productCategory: any;
  categoryList = [];
  constructor(private service: ProductService , private formBuilder: FormBuilder ,
              private productService: ProductCategoryService ,
              public dialogRef: MatDialogRef<ProductRegisteringComponent>) {
    this.productService.getAll().subscribe(obj => {
      obj.forEach ( Obj => {this.categoryList.push(Obj.categoryName); });
       } );

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ice: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
    });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.productService.getByProctName(this.productCategory).subscribe(data => {this.product.productCategory = data;

    this.service.create(this.product).subscribe(Data => {
    });
    });
    // this.toast.success('The process has been saved.', 'Success');
    // this.onReset();
    // display form values on success
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.product = new Product();
  }

  closeDialog() {
    this.dialogRef.close({event: 'close'});
  }
}
