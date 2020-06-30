import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {FournisseurService} from '../../../@core/backend/common/services/Fournisseur.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [FournisseurService],
})
export class ListComponent implements OnInit {
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
      firstname: {
        title: 'First Name',
        type: 'string',
      },
      lastname: {
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
      adresse: {
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

  constructor(private service: FournisseurService) { }
  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
  }

  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      this.service.deleteClient(event.data.id).subscribe(data => {});
    } else {
      event.confirm.reject();
    }
  }

  create(event: any) {
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe( data => {});
  }

  edit(event: any) {
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe( data => {
    });
  }

  onRowSelect(event: any) {}
}
