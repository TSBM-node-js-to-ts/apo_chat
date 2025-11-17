import express from 'express';
import healthRouter from './routes/health.route.js';
import { ChatRoomService } from "./domains/chat/ChatRoomService.js";
import { ChatRoomRepository } from "./domains/chat/ChatRoomRepository.js";
import { createChatRoomRouter } from "./routes/chatRoom.route.js";
import {errorHandler} from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

app.use('/health', healthRouter);

const chatRoomRepository = new ChatRoomRepository();
const chatRoomService = new ChatRoomService(chatRoomRepository);
app.use('/rooms', createChatRoomRouter({ chatRoomService }));

app.use(errorHandler);
export default app;