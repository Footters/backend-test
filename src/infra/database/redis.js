'use strict'

const Redis = require('redis');
const client = Redis.createClient();

module.exports = client;