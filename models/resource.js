'use strict';
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    path_1: {
      type: Datatypes.TEXT,
      allowNull: true
    },
    path_2: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    classMethods: {
    },
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
  Resource.associate = function(models){
    // this.BelongsTo()
  };
  return Resource;
};