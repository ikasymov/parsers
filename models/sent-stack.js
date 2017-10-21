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
    }
  }, {
    classMethods: {
    },
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
  SentStack.associate = function(models){
    this.BelongsTo(models.Resource, {foreignKey: 'resource_id'})
  };
  return SentStack;
};