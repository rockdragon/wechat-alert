import debug from 'debug'

global.__ENV__ = process.env.NODE_ENV || 'development'
global.println = console.log
global.dir = console.dir
global.error = console.error
global.debug = debug
global.debugInfo = debug('wechat:alert')
global.fs = require('fs')
global.path = require('path')
global.url = require('url')
global.rootDir = path.resolve('./')

require('../config')
global.logger = require('../components/logger').default