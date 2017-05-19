const { Contact } = require('wechaty')

export function debugPersonInfo(contact) {
  const { id, signature, province, city } = contact.obj
  debugInfo('个人', `${contact.get('name')} ${id}, ${signature}, [${province}-${city}]`)
}

export async function allContacts() {
  const contacts = await Contact.findAll()

  for (let contact of contacts) {
    debugInfo('contact', '#######################')
    if (contact.personal()) {
      debugPersonInfo(contact)
    }
  }

  debugInfo('People', '#######################')
  debugInfo('Contact number', contacts.length)
}

export async function findByName(name) {
  const contact = await Contact.find({ name: name })
  debugPersonInfo(contact)
  return contact
}

export async function findByAlias(alias) {
  const contact = await Contact.find({ alias: alias })
  debugPersonInfo(contact)
  return contact
}