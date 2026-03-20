import express from 'express';
import notesRouter from './routes/notesrouter.js';
import { connect } from 'mongoose';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import ratelimiter from './config/upstash.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(ratelimiter);
const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRouter);

connectDB().then(() => {

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});     
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); 
});
export default app;