/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _graphql = __webpack_require__(27);

var _hello = __webpack_require__(36);

var _hello2 = _interopRequireDefault(_hello);

var _setHello = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./types/setHello\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _setHello2 = _interopRequireDefault(_setHello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = exports.schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: _hello2.default
    }
  }),

  mutation: new _graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      setHello: _setHello2.default
    }
  })
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
var logger = __webpack_require__(1);
var app = __webpack_require__(4);
var port = app.get('port');
var server = app.listen(port);

process.on('unhandledRejection', function (reason, p) {
  return logger.error('Unhandled Rejection at: Promise ', p, reason);
});

server.on('listening', function () {
  return logger.info('Feathers application started on http://%s:%d', app.get('host'), port);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(5);
var favicon = __webpack_require__(6);
var compress = __webpack_require__(7);
var cors = __webpack_require__(8);
var helmet = __webpack_require__(9);
var bodyParser = __webpack_require__(10);

var feathers = __webpack_require__(11);
var configuration = __webpack_require__(12);
var hooks = __webpack_require__(13);
var rest = __webpack_require__(14);
var socketio = __webpack_require__(15);

var handler = __webpack_require__(16);
var notFound = __webpack_require__(17);

var middleware = __webpack_require__(18);
var services = __webpack_require__(19);
var appHooks = __webpack_require__(34);

var app = feathers();

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', feathers.static(app.get('public')));

// Set up Plugins and providers
app.configure(hooks());
app.configure(rest());
app.configure(socketio());

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

module.exports = app;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("feathers");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("feathers-configuration");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("feathers-hooks");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("feathers-rest");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("feathers-socketio");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("feathers-errors/handler");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("feathers-errors/not-found");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  var app = this; // eslint-disable-line no-unused-vars
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var graphql = __webpack_require__(20);

module.exports = function () {
  var app = this;
  app.configure(graphql);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Initializes the `graphql` service on path `/graphql`
var createService = __webpack_require__(21);
var hooks = __webpack_require__(28);
var filters = __webpack_require__(29);

module.exports = function () {
  var app = this;
  var paginate = app.get('paginate');

  var options = {
    name: 'graphql',
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/graphql', createService(options));

  // Get our initialized service so that we can register hooks and filters
  var service = app.service('graphql');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-unused-vars */

var _graphql = __webpack_require__(0);

var _graphql2 = __webpack_require__(27);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
  function Service(options) {
    _classCallCheck(this, Service);

    this.options = options || {};
  }

  _createClass(Service, [{
    key: 'find',
    value: function find(params) {
      var queryParams = params.query;
      return Promise.resolve((0, _graphql2.graphql)({ schema: _graphql.schema, source: queryParams.query }).then(function (result) {
        console.log(result);
        return result;
      }));
    }
  }, {
    key: 'create',
    value: function create(data, _params) {
      return Promise.resolve((0, _graphql2.graphql)({ schema: _graphql.schema, source: data }).then(function (result) {
        console.log(result);
        return result;
      }));
    }
  }]);

  return Service;
}();

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-console: 1 */
console.warn('You are using the default filter for the graphql service. For more information about event filters see https://docs.feathersjs.com/api/events.html#event-filtering'); // eslint-disable-line no-console

module.exports = function (data, connection, hook) {
  // eslint-disable-line no-unused-vars
  return data;
};

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Application hooks that run for every service
var logger = __webpack_require__(35);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [logger()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [logger()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A hook that logs service method before, after and error
var logger = __webpack_require__(1);

module.exports = function () {
  return function (hook) {
    var message = hook.type + ': ' + hook.path + ' - Method: ' + hook.method;

    if (hook.type === 'error') {
      message += ': ' + hook.error.message;
    }

    logger.info(message);
    logger.debug('hook.data', hook.data);
    logger.debug('hook.params', hook.params);

    if (hook.result) {
      logger.debug('hook.result', hook.result);
    }

    if (hook.error) {
      logger.error(hook.error);
    }
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(27);

exports.default = hello = {
  type: _graphql.GraphQLString,
  resolve: function resolve() {
    return 'world';
  }
};

/***/ })
/******/ ]);
