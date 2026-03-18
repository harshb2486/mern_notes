import express from 'express';
import notesRouter from './notesrouter.js'; 
const app = express();

app.use("/api/notes", notesRouter);

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});     

