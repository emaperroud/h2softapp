const usuario = require('./usuario/usuario.service.js');
const cliente = require('./cliente/cliente.service.js');
const roles = require('./roles/roles.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(usuario);

  app.configure(cliente);
  app.configure(roles);
};
