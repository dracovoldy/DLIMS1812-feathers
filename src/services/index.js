const customers = require('./customers/customers.service.js');
const users = require('./users/users.service.js');
const materials = require('./materials/materials.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(customers);
  app.configure(users);
  app.configure(materials);
};
