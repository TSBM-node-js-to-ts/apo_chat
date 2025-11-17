import {ChatRoom} from "../../../src/domains/chat/ChatRoom.js";
import {InvalidRequestError} from "../../../src/errors/InvalidRequestError.js";

describe('ChatRoom 도메인 테스트', () => {
  test('ChatRoom 객체 생성이 잘 동작하는지', () => {
    const createdBy = 'tsbm123';
    const chatRoom = new ChatRoom({ createdBy });
    expect(chatRoom.createdBy).toBe('tsbm123');
  })

  test.each([
      [null, undefined, '', '   ']
  ])('createdBy가 유효하지 않은 경우 에러가 잘 발생하는지', (invalidValue) => {
    expect(() => {
      new ChatRoom({ createdBy: invalidValue });
    }).toThrow(InvalidRequestError);
  });
})