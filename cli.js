#!/usr/bin/env node
'use strict'

const kill = require('./')
const args = require('get-them-args')(process.argv.slice(2))

const port = args.port || args.unknown
const signal = args.signal || args.s || 9 // see kill -l, man kill

kill(port, signal)
  .then(() => console.log(`Process on port ${port} killed with signal ${signal}`))
  .catch(() => console.log(`Could not kill process on port ${port}`))
