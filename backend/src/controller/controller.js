const getNotes = (req, res) => {
    res.status(200).json({message: "Hello from the notes router!"});
};

const createNote = (req, res) => {
    res.status(201).json({message: "Note created!"});
};

const updateNote = (req, res) => {
    res.status(200).json({message: `Note with id ${req.params.id} updated!`});
};

const deleteNote = (req, res) => {
    res.status(200).json({message: `Note with id ${req.params.id} deleted!`});
};

export { getNotes, createNote, updateNote, deleteNote };