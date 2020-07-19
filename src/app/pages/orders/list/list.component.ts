import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../@core/backend/common/services/Orders.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [OrdersService],
})
export class ListComponent implements OnInit {

  source: any;
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
    custom: [
      {
        name: 'visiterrecord',
        title: '<i class="nb-list"></i>',
      },
    ],
    columns: {
      date: {
        title: 'Date',
        type: 'String',
        editable: false,
      },
      client: {
        title: 'Client',
        type: 'string',
      },
      product: {
        title: 'Product',
        type: 'string',
      },
      orderDetail: {
        title: 'Order Detail',
        type: 'string',
      },
      TTC: {
        title: 'TTC',
        type: 'string',
      },
    },
  };

  constructor(private service: OrdersService, private router: Router) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
  }

  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      this.service.deleteClient(event.data.id).subscribe(data => {
      });
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
  popupRegister() {
    this.router.navigateByUrl( 'pages/Orders/registering' , {queryParams: {}});
  }
  onRowSelect(event: any) {}
}

