import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Command} from '../../../@core/backend/common/api/Command';
import {CommandService} from '../../../@core/backend/common/services/Command.service';
import {ClientService} from '../../../@core/backend/common/services/Client.service';

@Component({
  selector: 'ngx-command-registring',
  templateUrl: './command-registring.component.html',
  styleUrls: ['./command-registring.component.scss'],
  providers: [CommandService, ClientService],
})
export class CommandRegistringComponent implements OnInit {
  registerForm: FormGroup;
  command: Command = new Command() ;
  submitted = false;
  ICE: any;
  constructor(private service: CommandService , private formBuilder: FormBuilder ,
              private serviceClient: ClientService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ice: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
    });
  }
  get f() { return this.registerForm.controls; }
 init () {
    this.command = new Command();
 }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.serviceClient.getByCin(this.ICE).subscribe(data => {this.command.client = data;
    });
    this.service.create(this.command).subscribe(data => {
    });
    // this.toastr.success('The process has been saved.', 'Success');
     this.init();
    // display form values on success
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
