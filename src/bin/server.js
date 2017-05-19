#!/usr/bin/env node

require('babel-register')
require('./init')
require('../app/app').start()
