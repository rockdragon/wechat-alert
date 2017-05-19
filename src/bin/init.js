import debug from 'debug'

global.__ENV__ = process.env.NODE_ENV || 'development'
global.debug = debug
global.debugInfo = debug('wechat:alert')
global.fs = require('fs')
global.path = require('path')
global.url = require('url')
global.dir = console.dir
global.rootDir = path.resolve('./')

require('../config')
global.logger = require('../components/logger').default