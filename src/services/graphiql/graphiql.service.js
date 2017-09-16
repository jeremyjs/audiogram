// Initializes the `graphiql` service on path `/graphiql`
const createService = require('./graphiql.class.js');
const hooks = require('./graphiql.hooks');
const filters = require('./graphiql.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'graphiql',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/graphiql', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('graphiql');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
