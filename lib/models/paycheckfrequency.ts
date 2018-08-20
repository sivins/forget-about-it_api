/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paycheckfrequency', {
    PaycheckFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'paycheckfrequency'
  });
};
