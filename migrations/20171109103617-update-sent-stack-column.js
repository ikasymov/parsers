module.exports = {
  up  : function (queryInterface, Sequelize) {
    return queryInterface
     .changeColumn('sent_stacks', 'urls', {
       type: Sequelize.TEXT('long'),
       allowNull: false
     });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface
     .changeColumn('sent_stacks', 'urls', {
       type: Sequelize.TEXT('long'),
       allowNull: false
     });
  }
};