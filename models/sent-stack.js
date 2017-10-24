'use strict';
module.exports = function(sequelize, DataTypes) {
  var SentStack = sequelize.define('SentStack', {
    urls: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    resource_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    classMethods: {
    },
    timestamps: true,
    underscored: true,
    underscoredAll: true
  });
  SentStack.associate = function(models){
    this.belongsTo(models.Resource, {foreignKey: 'resource_id'})
  };
  return SentStack;
};