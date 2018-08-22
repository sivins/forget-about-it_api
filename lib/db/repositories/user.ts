import {IDatabase, IMain, ColumnSet} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import sqlProvider = require('../sql');

const sql = sqlProvider.user;

/*
 This repository mixes hard-coded and dynamic SQL, primarily to show a diverse example of using both.
 */

export class UserRepository {

    constructor(db: any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
        // set-up all ColumnSet objects, if needed:
        // this.createColumnsets();
    }

    // if you need to access other repositories from here,
    // you will have to replace 'IDatabase<any>' with 'any':
    private db: IDatabase<any>;

    private pgp: IMain;

    // ColumnSet objects static namespace:
    // private static cs: UserColumnsets;

    // Tries to delete a user by id, and returns the number of records deleted;
    remove(id: number) {
        return this.db.result('DELETE FROM user WHERE id = $1', +id, (r: IResult) => r.rowCount);
    }

    // Tries to find a user from name;
    findByName(name: string) {
        return this.db.oneOrNone(sql.find, name);
    }

    details(id: number) {
        return this.db.multi(sql.details, id);
    }

    // Returns all user records;
    all() {
        return this.db.any('SELECT * FROM user');
    }

    // Returns the total number of user;
    total() {
        return this.db.one('SELECT count(*) FROM user', [], (a: { count }) => +a.count);
    }

    /*
    // example of setting up ColumnSet objects:
    private createColumnsets() {
        // create all ColumnSet objects only once:
        if (!UserRepository.cs) {
            const helpers = this.pgp.helpers, cs: UserColumnsets = {};

            // Type TableName is useful when schema isn't default "public" ,
            // otherwise you can just pass in a string for the table name.
            const table = new helpers.TableName({table: 'user', schema: 'public'});

            cs.insert = new helpers.ColumnSet(['name'], {table});
            cs.update = cs.insert.extend(['?id']);

            UsersRepository.cs = cs;
        }
    }
    */

}

/*
type UserColumnsets = {
    insert?: ColumnSet,
    update?: ColumnSet
};
*/