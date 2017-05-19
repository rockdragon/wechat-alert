global.config = require(`./${__ENV__}`)
debugInfo('Current ENV is:', config.bindingName)
debugInfo('Server Root Dir is:', rootDir)