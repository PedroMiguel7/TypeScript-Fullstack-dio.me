export abstract class DioAccount {
  name!: string;
  accountNumber!: number;
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit(amount: number) {
    console.log(`Deposited ${amount} in account ${this.accountNumber}`);
  }

  withdraw(amount: number) {
    console.log(`Withdrew ${amount} from account ${this.accountNumber}`);
  }

  getBalance() {
    console.log(this.balance);
  }
}
