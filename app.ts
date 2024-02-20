import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount.getID())
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.getLoan(200)
console.log(companyAccount.getBalance())
const specialAccount: SpecialAccount = new SpecialAccount('Leodário', 30)
console.log(specialAccount)
specialAccount.deposit10(100)
console.log(specialAccount.getBalance())