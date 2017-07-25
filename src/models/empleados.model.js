// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const empleados = sequelizeClient.define('empleados', {
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    birthdate: {
      type: Sequelize.STRING,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  empleados.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return empleados;
};
