/* eslint-disable no-unused-vars */

const { graphql } = require('graphql');
const schema = require('../../graphql');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    const queryParams = params.query;
    return Promise.resolve(
      graphql({ schema, source: queryParams.query }).then(result => {
        console.log(result);
        return result;
      })
    );
  }

  create (data, _params) {
    return Promise.resolve(
      graphql({ schema, source: data }).then(result => {
        console.log(result);
        return result;
      })
    );
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
