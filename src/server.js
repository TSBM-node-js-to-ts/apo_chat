import 'dotenv/config';
import app from './app.js';
import {sequelize} from "./db/sequelize.js";

const PORT = process.env.PORT;

await sequelize.sync({ alter: true });

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})