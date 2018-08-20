/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billpayment', {
    BillPaymentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BillId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CheckingAccountTransactionId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PaidDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ConfirmationNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EnteredStamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatedStamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'billpayment'
  });
};

export class BillPayment {
  BillPaymentId: number;
  UserId: number;
  BillId: number;
  Bill: string;
  AccountId: number;
  Account: string;
  CheckingAccountTransactionId: string;
  PaidDate: Date;
  Amount: number;
  ConfirmationNumber: string;
  Notes: string;
  EnteredStamp: Date;
  UpdatedStamp: Date;
}
