export class PicklistItem {
    id: number;
    description: string;
}

export class Picklists {
    paycheckFrequencies: Array<PicklistItem>;
    accountTypes: Array<PicklistItem>;
    purchaseCategories: Array<PicklistItem>;
    contexts: Array<PicklistItem>;
}
