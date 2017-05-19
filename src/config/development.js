module.exports = {
  app: {
    env: __ENV__,
  },
  bindingName: 'development',
  trustProxy: true,
  winston: {
    consoleLevel: 'debug',
    fileLevel: 'error',
    filename: 'logs/huiwanpt-web-app.log',
  },
  monitor: {
    path: '/monitor',
    title: 'huiwanpt status monitor'
  },
}
