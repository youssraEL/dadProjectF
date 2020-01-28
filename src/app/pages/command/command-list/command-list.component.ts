import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {CommandService} from '../../../@core/backend/common/services/Command.service';
import {CommandODT} from '../../../@core/backend/common/api/CommandODT';
import {ClientService} from '../../../@core/backend/common/services/Client.service';
import {ProductService} from '../../../@core/backend/common/services/Product.service';


@Component({
  selector: 'ngx-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.scss'],
  providers: [CommandService , ClientService , ProductService],
})
export class CommandListComponent implements OnInit {
  settings = {
    actions: {
      add: false,
    },
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
      client: {
        title: 'ICE',
        type: 'string',
        editable: false,
      },
      product: {
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
        title: 'priceReste',
        type: 'number',
      },
      payementMethode: {
        title: 'Payement Methode',
        type: 'String',
      },
      commandReference: {
        title: 'Command Reference',
        type: 'String',
      },
      commandType: {
        title: 'Command Type',
        type: 'String',
      },
    },
  };
  commands = [];
  source: any;

  constructor(private service: CommandService , private clientService: ClientService ,
              private productService: ProductService) {
    this.service.getAll().subscribe(data => {
      data.forEach ( obj => {
        this.commands.push(new CommandODT(
          obj.id,
          obj.client.ice,
          obj.product.productName,
          obj.commandReference,
          obj.commandType,
          obj.qteBuy,
          obj.qteSell,
          obj.price ,
          obj.priceTopay,
          obj.priceReste,
          obj.payementMethode,
          obj.commandeDate));
      });
      this.source = this.commands;
    });
  }

  ngOnInit() {
  }

  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.service.delete(event.data.id).subscribe( data => { });
    } else {
      event.confirm.reject();
    }
  }

  edit(event: any) {
    this.clientService.getByCin(event.newData.client).subscribe(data => { event.newData.client = data ; });
    this.productService.get(event.newData.product).subscribe(data => { event.newData.product = data ; });
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe( data => {
    });
  }

}
