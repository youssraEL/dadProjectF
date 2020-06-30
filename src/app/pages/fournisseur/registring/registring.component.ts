import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Fournisseur} from '../../../@core/backend/common/api/Fournisseur';
import {FournisseurService} from '../../../@core/backend/common/services/Fournisseur.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ngx-registring',
  templateUrl: './registring.component.html',
  styleUrls: ['./registring.component.scss'],
  providers: [FournisseurService],
})
export class RegistringComponent implements OnInit {
  fournisseur: Fournisseur = new Fournisseur();
  registerForm: FormGroup;
  submitted = false;
  constructor(private service: FournisseurService , private formBuilder: FormBuilder ,
              public dialogRef: MatDialogRef<RegistringComponent>) { }

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
    this.service.create(this.fournisseur).subscribe(data => { });
    // this.toast.success('The process has been saved.', 'Success');
    this.init();
    // display form values on success
  }
  init() {
    this.fournisseur = new Fournisseur();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
