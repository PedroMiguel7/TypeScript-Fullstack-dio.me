export abstract class DioAccount {
  private readonly name!: string;
  private readonly accountNumber!: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public getName(): string {
    return this.name;
  }

  public deposit(amount: number): void {
    if (this.validateStatus() && this.validateValue(amount)) {
      this.setBalance(amount);
      return;
    }

    throw new Error("Invalid deposit.");
  }

  public withdraw(amount: number): void {
    if (
      this.validateStatus() &&
      this.validateValue(amount) &&
      this.balance >= amount
    ) {
      this.setBalance(-amount);
      return;
    }

    throw new Error("Invalid withdraw.");
  }

  public getBalance(): void {
    console.log({
      account: this.name,
      balance: this.balance,
    });
  }

  protected setBalance(value: number): void {
    this.balance += value;
  }

  protected validateStatus(): boolean {
    if (!this.status) {
      throw new Error("Account not active.");
    }
    return this.status;
  }

  protected validateValue(amount: number): boolean {
    return amount > 0;
  }
}
