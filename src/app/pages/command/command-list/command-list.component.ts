import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {CommandService} from '../../../@core/backend/common/services/Command.service';


@Component({
  selector: 'ngx-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.scss'],
  providers: [CommandService],
})
export class CommandListComponent implements OnInit {
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
      Ice: {
        title: 'ICE',
        type: 'string',
        editable: false,
      },
      produit: {
        title: 'Produit',
        type: 'string',
      },
      qteBuy: {
        title: 'Quantity Buy',
        type: 'number',
      },
      qteSell: {
        title: 'Quentity Sell ',
        type: 'number',
      },
      price: {
        title: 'Price',
        type: 'string',
      },
      priceTopay: {
        title: 'Price payed',
        type: 'number',
      },
      priceReste: {
        title: '',
        type: 'number',
      },
      payementMethode: {
        title: 'payementMethode',
        type: 'String',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CommandService) {
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
  }

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

  onRowSelect(event: any) {
    this.service = event.data;
  }

}
