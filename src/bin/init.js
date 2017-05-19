import debug from 'debug'
import { utils } from '../components'

global.__ENV__ = process.env.NODE_ENV || 'development'
global.println = console.log
global.dir = console.dir
global.error = console.error
global.debug = debug
global.debugInfo = debug('chatbot:app')
global.fs = require('fs')
global.path = require('path')
global.url = require('url')
global.rootDir = path.resolve('./')

require('../config')
global.logger = require('../components/logger').default
global.utils = utils
