abstract class Account {
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

class PeopleAccount extends Account {
  doc_id!: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}

const peopleAccount: PeopleAccount = new PeopleAccount(123, "John Doe", 123456);
console.log(peopleAccount);
