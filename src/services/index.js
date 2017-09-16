const graphql = require('./graphql/graphql.service.js');

module.exports = function () {
  const app = this;
  app.configure(graphql);
};
