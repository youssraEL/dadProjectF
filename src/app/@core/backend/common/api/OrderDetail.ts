import {Product} from './Product';

export class OrderDetail {
  id: number;
  idProduct: Product;
  Qte: number;
  prixVente: number;
  remise: number;
  avance: number;
  reste: number;

  constructor() {
  }
}
