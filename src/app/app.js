import { events, contacts, rooms } from './actions'
const { Wechaty } = require('wechaty')

export function start() {
  const bot = Wechaty.instance()

  bot.on('scan', events.scan)
    .on('login', async(user) => {
      events.login(user)
      await utils.sleep(10)
      // await contact.allContacts()

      // const person = await contacts.findByName('Jsp')
      // if (person) {
      //   debugInfo('Holy crap, it just caught target.')
      //   global.target = person
      //   person.say(`Hi, ${person.get('name')}, I'm Walle.`)
      // }
      const room = await rooms.findRoom(/^男人不怕输/i)
      if (room) {
        global.room = room
      }
    })
    .on('message', (message) => {
      events.message(message)
      if (message.self()) {
        return
      }

      const sender = message.from()
      const senderRoom = message.room()
      const content = message.content()
      // if (global.target) {
      //   if (sender.get('id') === target.get('id')) {
      //     target.say(`you just said: ${content}, ${sender.get('name')}`)
      //   }
      // }
      if (global.room) {
        if (senderRoom.obj.id === room.obj.id) {
          room.say(`${sender.get('name')} said: ${content}`)
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