export function login(user) {
  println(`User ${user} logined`)
}

export function scan(url, code) {
  println(`Scan QR Code to login: ${code}\n${url}`)
}

export function message(message) {
  const room      = message.room()
  const sender    = message.from()
  const content   = message.content()
  println(`Message: ${sender}: ${content} IN ${room}`)
}