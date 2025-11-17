import {ChatRoom} from "../../../src/domains/chat/ChatRoom.js";

describe('ChatRoom 도메인 테스트', () => {
  test('ChatRoom 객체 생성이 잘 동작하는지', () => {
    const createdBy = 'tsbm123';
    const chatRoom = new ChatRoom({ createdBy });
    expect(chatRoom.createdBy).toBe('tsbm123');
  })
})