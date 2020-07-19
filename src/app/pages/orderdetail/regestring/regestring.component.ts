import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderDetailService} from '../../../@core/backend/common/services/OrderDetail.service';
import {OrderDetail} from '../../../@core/backend/common/api/OrderDetail';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Orders} from '../../../@core/backend/common/api/Orders';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'ngx-regestring',
  templateUrl: './regestring.component.html',
  styleUrls: ['./regestring.component.scss'],
  providers: [OrderDetailService, MatDialog],
})
export class RegestringComponent implements OnInit {

  orderDetail: OrderDetail = new OrderDetail();
  registerForm: FormGroup;
  submitted = false;
  order: any;
  Qte: any;
  constructor(private service: OrderDetailService , private formBuilder: FormBuilder , private dialog: MatDialog,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.order = this.router.getCurrentNavigation().extras.queryParams.data;
        this.Qte = this.router.getCurrentNavigation().extras.queryParams.Qte;
      }
    });
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ice: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
    });
  }
 f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.service.create(this.orderDetail).subscribe(data => { });
    // this.toast.success('The process has been saved.', 'Success');
    this.init();
    // display form values on success
  }
  init() {
    this.orderDetail = new OrderDetail();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
