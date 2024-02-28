import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { MiguelAccount } from "./class/MiguelAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  123,
  "Pedro Miguel",
  123456
);
peopleAccount.getName();
peopleAccount.deposit(1000);
peopleAccount.withdraw(500);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount(
  123,
  "Galdino Industries",
  123456
);
companyAccount.getLoan(1000);
companyAccount.getName();
companyAccount.deposit(1000);
companyAccount.withdraw(500);
companyAccount.getBalance();

const miguelAccount: MiguelAccount = new MiguelAccount("Miguel", 123456);
miguelAccount.getName();
miguelAccount.deposit(1000);
miguelAccount.withdraw(500);
miguelAccount.getBalance();
