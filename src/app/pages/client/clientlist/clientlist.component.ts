import { Component, OnInit } from '@angular/core';
import {Client} from '../../../@core/backend/common/api/Client';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ClientService} from '../../../@core/backend/common/services/Client.service';
import {LocalDataSource} from 'ng2-smart-table';
// import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ngx-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss'],
  providers: [ClientService],
})
export class ClientlistComponent implements OnInit {
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
      ice: {
        title: 'ICE',
        type: 'number',
        editable: false,
      },
      Fristname: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      phone: {
        title: 'Phone Number',
        type: 'string',
      },
      fix: {
        title: 'Fix',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      RaisonSociale: {
        title: 'Raison Sociale',
        type: 'string',
      },
      typeClient: {
        title: 'Type Client',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(private clientService: ClientService) {
    this.clientService.getAll().subscribe(data => {
      this.source = data;
    });
  }

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.source = data;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.clientService.delete(event.data.id).subscribe();
    } else {
      event.confirm.reject();
    }
  }

  create(event) {
    event.confirm.resolve(event.newData);
    this.clientService.create(event.newData).subscribe( data => {});
  }

  edit(event: any) {
    event.confirm.resolve(event.newData);
    this.clientService.update(event.newData).subscribe( data => {
    });
  }

  onRowSelect($event: any) {
    this.clientService = $event.data;
  }

}
