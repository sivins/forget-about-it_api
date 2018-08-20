/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AccountTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Balance: {
      type: DataTypes.DOUBLE,
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
    tableName: 'account'
  });
};

export class Account {
  AccountId: number;
  UserId: number;
  AccountTypeId: number;
  AccountType: string;
  Description: string;
  Balance: number;
  EnteredStamp: Date;
  UpdatedStamp: Date;
}
