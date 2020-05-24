'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Profile, { foreignKey: 'profileId' });
    User.belongsTo(models.School, { foreignKey: 'schoolId' });
  };
  return User;
};