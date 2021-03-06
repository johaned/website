'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  ip: '0.0.0.0',
  port: process.env.PORT || 9001,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};