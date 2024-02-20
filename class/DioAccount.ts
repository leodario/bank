export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance += valor
      console.log(`Depósito de R$ ${valor} realizado com sucesso! Saldo atual é $ ${this.balance}`)
    }
  }


  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus() && valor <= this.balance){
      this.balance -= valor
      console.log(`Valor sacado: ${valor}! Saldo atual: ${this.balance}!`)
    } else {
      console.log('Saldo insuficiente')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
