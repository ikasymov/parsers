module.exports = {
  up  : function (queryInterface, Sequelize) {
    return queryInterface
     .changeColumn('topical_stacks', 'urls', {
       type: Sequelize.TEXT('long'),
       allowNull: false
     });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface
     .changeColumn('topical_stacks', 'urls', {
       type: Sequelize.TEXT('long'),
       allowNull: false
     });
  }
};/**
 * Created by ilgizkasymov on 11/9/17.
 */
