import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({message: "Hello from the notes router!"});
});

router.post("/", (req, res) => {
    res.status(201).json({message: "Note created!"});
});

router.put("/:id", (req, res) => {
    res.status(200).json({message: `Note with id ${req.params.id} updated!`});
});

router.delete("/:id", (req, res) => {
    res.status(200).json({message: `Note with id ${req.params.id} deleted!`});
});

export default router;