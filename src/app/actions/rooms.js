import { Room } from 'wechaty'
import { debugPersonInfo } from './contacts'

function debugRoom(room) {
  const { id, topic, memberList} = room.obj
  debugInfo('房间', `${topic} ${id}`)
  for (let member of memberList) {
    debugPersonInfo(member)
  }
}

export async function findRoom(topic) {
  const room = await Room.find({ topic: topic })
  debugRoom(room)
  return room
}