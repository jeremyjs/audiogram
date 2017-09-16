const assert = require('assert');
const app = require('../../src/app');

describe('\'graphiql\' service', () => {
  it('registered the service', () => {
    const service = app.service('graphiql');

    assert.ok(service, 'Registered the service');
  });
});
