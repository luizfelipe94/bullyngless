'use strict';
module.exports = (sequelize, DataTypes) => {
  const Defendent = sequelize.define('Defendent', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    defendentBlackListId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Defendent.associate = function(models) {
    Defendent.belongsToMany(models.Denouement, {through: 'denouement_defendent', foreignKey: 'defendentId' });
    Defendent.belongsTo(models.DefendentBlackList, { foreignKey: 'defendentBlackListId' });
  };
  return Defendent;
};