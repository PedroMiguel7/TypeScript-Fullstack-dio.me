import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  cnpj!: number;

  constructor(cnpj: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.cnpj = cnpj;
  }

  getLoan(amount: number) {
    if (this.validateStatus()) {
      this.setBalance(amount);
      return;
    }

    throw new Error("Invalid loan.");
  }
}
