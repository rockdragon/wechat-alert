module.exports = {
  app: {
    env: __ENV__,
  },
  bindingName: 'production',
  trustProxy: true,
  winston: {
    consoleLevel: 'info',
    fileLevel: 'error',
    filename: '/logs/huiwanpt-webapp/huiwanpt-web-app.log',
  },
}
