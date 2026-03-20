import Note from "../model/note.js";


export async function getNotes(req, res) { 
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch notes", error: error.message});
    }
};

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch note", error: error.message});
    }   
};


export async function createNote(req, res)  {
    try {   
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
    } catch (error) {
        res.status(500).json({message: "Failed to create note", error: error.message}); 
   }
};


export async function updateNote(req, res) {
    try {   
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: "Failed to update note", error: error.message});
    }
};

export async function deleteNote(req, res) {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message: `Note with id ${req.params.id} deleted!`});
    } catch (error) {
        res.status(500).json({message: "Failed to delete note", error: error.message});
    }
};
