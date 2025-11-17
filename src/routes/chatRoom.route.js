import express from "express";

export function createChatRoomRouter({ chatRoomService }) {
  const router = express.Router();

  router.post('/', async (req, res) => {
    const room = await chatRoomService.createRoom(req.body);
    res.status(201).json(room);
  })

  return router;
}