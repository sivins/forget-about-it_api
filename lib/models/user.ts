import { Todo } from './toDo';
import { Grocery } from './grocery';
import { Bill } from './bill';
import { BillPayment } from './billPayment';
import { Account } from './account';
import { Purchase } from './purchase';

export class User {
    UserId: number;
    UserName: string;
    Password: string;
    Active: boolean;
    PaycheckStartDate: Date;
    PaycheckFrequencyId: number;
    PaycheckAmount: number;
    EnteredStamp: Date;
    UpdatedStamp: Date;

    ToDos: Array<Todo>;
    Groceries: Array<Grocery>;
    Bills: Array<Bill>;
    BillPayments: Array<BillPayment>;
    Accounts: Array<Account>;
    Purchases: Array<Purchase>;
}
