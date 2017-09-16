const graphql = require('./graphql/graphql.service.js');
const graphiql = require('./graphiql/graphiql.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(graphql);
  app.configure(graphiql);
};
