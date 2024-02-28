import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  cnpj!: number;

  constructor(cnpj: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.cnpj = cnpj;
  }

  getLoan() {
    console.log("Loan granted");
  }

  deposit(amount: number): void {
    console.log(`Depositedddd ${amount} in account ${this.accountNumber}`);
  }
}
