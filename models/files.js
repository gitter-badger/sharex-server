'use strict';
module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    userid: DataTypes.INTEGER,
    filepath: DataTypes.STRING,
    expireingAt: DataTypes.DATE
  }, {});
  files.associate = function(models) {
    // associations can be defined here
  };
  return files;
};