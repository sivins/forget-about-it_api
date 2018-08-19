export class BillPayment {
    BillPaymentId: number;
    UserId: number;
    BillId: number;
    Bill: string;
    AccountId: number;
    Account: string;
    CheckingAccountTransactionId: string;
    PaidDate: Date;
    ConfirmationNumber: string;
    Notes: string;
    EnteredStamp: Date;
    UpdatedStamp: Date;
}
