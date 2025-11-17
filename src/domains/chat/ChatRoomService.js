import {ChatRoom} from "./ChatRoom.js";

export class ChatRoomService {
  constructor(chatRoomRepository) {
    this.chatRoomRepository = chatRoomRepository;
  }

  async createRoom({ createdBy }){
    const room = new ChatRoom({ createdBy: createdBy });
    return this.chatRoomRepository.save(room);
  }
}