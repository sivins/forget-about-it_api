/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bill', {
    BillId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Autodraft: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StartingDueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DaysUntilNextDueDate: {
      type: DataTypes.INTEGER,
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
    tableName: 'bill'
  });
};

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
