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
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      UserName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Active: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PaycheckStartDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      PaycheckFrequencyId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      PaycheckAmount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      EnteredStamp: {
        type: DataTypes.DATE,
        allowNull: false
      },
      UpdatedStamp: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'user'
    });
  };
  