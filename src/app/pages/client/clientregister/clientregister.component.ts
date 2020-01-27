import { Component, OnInit } from '@angular/core';
import {Client} from '../../../@core/backend/common/api/Client';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../../@core/backend/common/services/Client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.scss'],
  providers: [ClientService , ToastrService],
})
export class ClientregisterComponent implements OnInit {

  client: Client = new Client();
  registerForm: FormGroup;
  submitted = false;
  constructor(private service: ClientService , private formBuilder: FormBuilder , private toast: ToastrService) { }

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
    this.service.create(this.client).subscribe(data => { });
    this.toast.success('The process has been saved.', 'Success');
     this.init();
    // display form values on success
  }
  init() {
    this.client = new Client();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
