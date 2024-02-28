export enum AccountStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BLOCKED = "blocked",
  CANCELED = "canceled",
}

export abstract class DioAccount {
  private name!: string;
  accountNumber!: number;
  balance: number = 0;
  private status: AccountStatus = AccountStatus.ACTIVE;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  deposit(amount: number) {
    if (this.validateStatus()) {
      console.log(`Deposited ${amount} in account ${this.accountNumber}`);
      return;
    }
    throw new Error("Account is not active");
  }

  withdraw(amount: number) {
    console.log(`Withdrew ${amount} from account ${this.accountNumber}`);
  }

  getBalance() {
    console.log(this.balance);
  }

  validateStatus(): boolean {
    return this.status === AccountStatus.ACTIVE;
  }
}
