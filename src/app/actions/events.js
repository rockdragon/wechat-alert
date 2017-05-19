export function login(user) {
  println(`User ${user} logined`)
}

export function scan(url, code) {
  println(`Scan QR Code to login: ${code}\n${url}`)
}

export function message(message) {
  println(`Message: ${message}`)
}