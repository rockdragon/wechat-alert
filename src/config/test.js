module.exports = {
  app: {
    env: __ENV__,
  },
  bindingName: 'test',
  trustProxy: true,
  winston: {
    consoleLevel: 'debug',
    fileLevel: 'error',
    filename: 'logs/huiwanpt-web-app.log',
  },
}
