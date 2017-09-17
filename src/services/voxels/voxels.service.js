// Initializes the `voxels` service on path `/voxels`
const createService = require('feathers-mongoose');
const createModel = require('../../models/voxels.model');
const hooks = require('./voxels.hooks');
const filters = require('./voxels.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'voxels',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/voxels', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('voxels');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
