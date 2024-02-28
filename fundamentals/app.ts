import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(123, "John Doe", 123456);
peopleAccount.deposit(100);

const companyAccount: CompanyAccount = new CompanyAccount(
  123,
  "Company Inc",
  654321
);
companyAccount.deposit(100);
