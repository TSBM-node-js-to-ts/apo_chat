import { ChatRoomEntity } from "../../infrastructures/database/models/chatRoom.entity.js";
import { ChatRoom } from "./ChatRoom.js";

export class ChatRoomRepository {
    async getById(id) {
        const entity = await ChatRoomEntity.findByPk(id);
        if (!entity) {
            throw new Error(`ChatRoom with id ${id} not found`);
        }
        return this._toDomain(entity);
    }

    async save(chatRoom) {
        let entity;

        if (chatRoom.id) {
            entity = await this.getById(chatRoom.id);
            entity.set(this._toPersistence(chatRoom));
            await entity.save();
        } else {
            entity = await ChatRoomEntity.create(this._toPersistence(chatRoom));
            chatRoom.id = entity.id;
        }
        return this._toDomain(entity);
    }

    _toDomain(entity) {
        return new ChatRoom({
            id: entity.id,
            createdBy: entity.createdBy,
        });
    }

    _toPersistence(chatRoom) {
        return {
            id: chatRoom.id,
            createdBy: chatRoom.createdBy,
        };
    }
}