export class Bill {
    BillId: number;
    UserId: number;
    Description: string;
    Autodraft: boolean;
    StartingDueDate: Date;
    DaysUntilNextDueDate: number;
    EnteredStamp: Date;
    UpdatedStamp: Date;
}
