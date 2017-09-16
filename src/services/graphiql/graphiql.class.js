/* eslint-disable no-unused-vars */

import graphiqlHandler from '../../graphql';

class Service {
  constructor (options) {
    this.options = options || {};
  }

  // find (params) {
  //   return Promise.resolve([]);
  // }

  get (id, params) {
    return graphiqlHandler(id, params);
  }

  // create (data, params) {
  //   if (Array.isArray(data)) {
  //     return Promise.all(data.map(current => this.create(current)));
  //   }
  //
  //   return Promise.resolve(data);
  // }
  //
  // update (id, data, params) {
  //   return Promise.resolve(data);
  // }
  //
  // patch (id, data, params) {
  //   return Promise.resolve(data);
  // }
  //
  // remove (id, params) {
  //   return Promise.resolve({ id });
  // }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
