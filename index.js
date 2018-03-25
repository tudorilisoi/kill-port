'use strict'

const sh = require('execa').shell

module.exports = function (port, signal) {
  if (!Number.parseInt(port)) {
    return Promise.reject(new Error('Invalid argument provided for port'))
  }

  return sh(`lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -${signal}`)
}
