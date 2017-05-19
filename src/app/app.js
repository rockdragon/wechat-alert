import { events, contact } from './actions'
import { utils } from '../components'
const { Wechaty } = require('wechaty')

export function start() {
  const bot = Wechaty.instance()

  bot.on('scan', events.scan)
    .on('login', async(user) => {
      events.login(user)
      await utils.sleep(2)
      await contact.allContacts()
    })
    .on('message', events.message)

  bot.init()
    .catch(e => {
      logger.error(e)
      bot.quit()
      process.exit(-1)
    })
}