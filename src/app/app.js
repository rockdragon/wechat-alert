import { events, contact } from './actions'
const { Wechaty } = require('wechaty')

export function start() {
  const bot = Wechaty.instance()

  bot.on('scan', events.scan)
    .on('login', async(user) => {
      events.login(user)
      await utils.sleep(10)
      // await contact.allContacts()

      const person = await contact.findByName('Jsp')
      if (person) {
        debugInfo('Holy crap, it just caught target.')
        global.target = person
        person.say(`Hi, ${person.get('name')}, I'm Walle.`)
      }
    })
    .on('message', (message) => {
      events.message(message)
      const sender = message.from()
      const content = message.content()
      if (global.target) {
        if (sender.get('id') === global.target.get('id')) {
          person.say(`you just said: ${content}, ${sender.get('name')}`)
        }
      }
    })

  bot.init()
    .catch(e => {
      logger.error(e)
      bot.quit()
      process.exit(-1)
    })
}