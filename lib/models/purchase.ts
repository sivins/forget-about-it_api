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
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('purchase', {
      PurchaseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      PurchaseCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      CheckingAccountTransactionId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      PurchaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      EnteredStamp: {
        type: DataTypes.DATE,
        allowNull: true
      },
      UpdatedStamp: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'purchase'
    });
  };
  