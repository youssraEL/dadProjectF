import {Client} from './Client';
import {Product} from './Product';
import {OrderDetail} from './OrderDetail';

export class Orders {
  id: number;
  date: Date;
  client: Client;
  product: Product;
  orderDetail: OrderDetail;
  TTC: number;

  constructor() {
  }
}
