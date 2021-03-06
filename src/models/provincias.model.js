// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.



const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const provincias = sequelizeClient.define('provincias', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  provincias.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    //provincias.belongsTo(models.paises);
  };

  return provincias;
};
