import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  } 

  deposit10 = (valor: number): void => {
    this.deposit(valor + 10)
  }
}