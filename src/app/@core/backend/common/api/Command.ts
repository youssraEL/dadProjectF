import {Product} from './Product';
import {Client} from './Client';

export  class Command {
id: number;
commandReference: string;
commandType: string;
client: Client;
product: Product ;
qteBuy: number;
qteSell: number;
price: number;
priceTopay: number;
priceReste: number;
payementMethode: string;
commandeDate: Date;

  constructor() {
  }
}
