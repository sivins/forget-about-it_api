export class Grocery {
    GroceryId: number;
    UserId: number;
    Description: string;
    EstimatedPrice: number;
    Location: string;
    EnteredStamp: Date;
    UpdatedStamp: Date;
}

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('grocery', {
      GroceryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      EstimatedPrice: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      Location: {
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
      }
    }, {
      tableName: 'grocery'
    });
  };
  