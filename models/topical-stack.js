'use strict';
module.exports = function(sequelize, DataTypes) {
  var TopicalStack = sequelize.define('TopicalStack', {
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
  TopicalStack.associate = function(models){
    this.BelongsTo(models.Resource, {foreignKey: 'resource_id'})
  };
  return TopicalStack;
};