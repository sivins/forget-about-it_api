export class Todo {
    ToDoId: number;
    UserId: number;
    Description: string;
    EnteredStamp: Date;
    UpdatedStamp: Date;
}

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('todo', {
      TodoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ContextId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Description: {
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
      tableName: 'todo'
    });
  };
  