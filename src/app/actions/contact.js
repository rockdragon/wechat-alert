const { Contact } = require('wechaty')

export async function allContacts() {
  const contacts = await Contact.findAll()

  println('Bot', '#######################')
  println('Bot', 'Contact number', contacts.length)

  for (let contact of contacts) {
    println('contact', '#######################')
    dir(contact)
  }
}