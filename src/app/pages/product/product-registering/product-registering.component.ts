import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../@core/backend/common/services/Product.service';
import {Product} from '../../../@core/backend/common/api/Product';
import {ProductCategoryService} from '../../../@core/backend/common/services/ProductCategory.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ngx-product-registering',
  templateUrl: './product-registering.component.html',
  styleUrls: ['./product-registering.component.scss'],
  providers: [ProductService, ProductCategoryService, ToastrService],
})

export class ProductRegisteringComponent implements OnInit {


  product: Product = new Product();
  registerForm: FormGroup;
  submitted = false;
  productCategory: any;
  constructor(private service: ProductService , private formBuilder: FormBuilder ,
              private productService: ProductCategoryService, private toast: ToastrService ) { }

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
    this.productService.getByProctName(this.productCategory).subscribe(data => {
      this.product.productCategory = data;
    });
    this.service.create(this.product).subscribe(data => {
    });
    this.toast.success('The process has been saved.', 'Success');
    this.onReset();
    // display form values on success
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.product = new Product();
  }

}
