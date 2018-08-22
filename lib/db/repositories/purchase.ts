import {IDatabase, IMain, ColumnSet} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import sqlProvider = require('../sql');

const sql = sqlProvider.purchase;

export class PurchaseRepository {
    private db: IDatabase<any>;
    private pgp: IMain;
    // ColumnSet objects static namespace:
    private static cs: PurchaseColumnsets;

    constructor(db: any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
        // set-up all ColumnSet objects, if needed:
        // this.createColumnsets();
    }

    /*
    private createColumnsets() {
        // create all ColumnSet objects only once:
        if (!PurchaseRepository.cs) {
            const helpers = this.pgp.helpers, cs: PurchaseColumnsets = {};

            // Type TableName is useful when schema isn't default "public" ,
            // otherwise you can just pass in a string for the table name.
            const table = new helpers.TableName({table: 'Purchase', schema: 'public'});

            cs.insert = new helpers.ColumnSet(['name'], {table});
            cs.update = cs.insert.extend(['?id', '?user_id']);

            PurchaseRepository.cs = cs;
        }
    }
    */
}

type PurchaseColumnsets = {
    insert?: ColumnSet,
    update?: ColumnSet
};