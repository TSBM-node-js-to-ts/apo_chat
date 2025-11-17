import {DataTypes, Model} from "sequelize";
import { sequelize } from "../../../db/sequelize.js";

export class ChatRoomEntity extends Model {}

ChatRoomEntity.init(
    {
        id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
        createdBy: { type: DataTypes.STRING(100), allowNull: false },
    },
    {
        sequelize,
        modelName: 'ChatRoom',
        tableName: 'chat_rooms',
    }
);