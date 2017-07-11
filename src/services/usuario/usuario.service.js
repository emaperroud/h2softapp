// Initializes the `Usuario` service on path `/usuario`
const createService = require('feathers-sequelize');
const createModel = require('../../models/usuario.model');
const hooks = require('./usuario.hooks');
const filters = require('./usuario.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'usuario',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/usuario', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('usuario');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
