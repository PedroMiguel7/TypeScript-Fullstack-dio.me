import { DioAccount } from "./DioAccount";

export class MiguelAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(amount: number): void {
    if (this.validateStatus() && this.validateValue(amount)) {
      this.setBalance(amount + 10);
      return;
    }

    throw new Error("Invalid deposit.");
  }
}
