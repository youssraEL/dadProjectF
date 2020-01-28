

export  class CommandODT {
  id: number;
  commandReference: string;
  commandType: string;
  client: string;
  product: string ;
  qteBuy: number;
  qteSell: number;
  price: number;
  priceTopay: number;
  priceReste: number;
  payementMethode: string;
  commandeDate: Date;


  constructor(id: number, client: string, product: string, commandReference: string, commandType: string,
               qteBuy: number,
              qteSell: number, price: number, priceTopay: number, priceReste: number,
              payementMethode: string, commandeDate: Date) {
    this.id = id;
    this.commandReference = commandReference;
    this.commandType = commandType;
    this.client = client;
    this.product = product;
    this.qteBuy = qteBuy;
    this.qteSell = qteSell;
    this.price = price;
    this.priceTopay = priceTopay;
    this.priceReste = priceReste;
    this.payementMethode = payementMethode;
    this.commandeDate = commandeDate;
  }
}
