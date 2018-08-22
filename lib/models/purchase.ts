export class Purchase {
    PurchaseId: number;
    UserId: number;
    PurchaseCategoryId: number;
    PurchaseCategory: string;
    AccountId: number;
    Account: string;
    CheckingAccountTransactionId: string;
    Description: string;
    Amount: number;
    PurchaseDate: Date;
    EnteredStamp: Date;
    UpdatedStamp: Date;
}
