const { Wechaty } = require('wechaty')

export function start() {
  Wechaty.instance() // Singleton
    .on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
    .on('login',       user => console.log(`User ${user} logined`))
    .on('message',  message => console.log(`Message: ${message}`))
    .init()
}