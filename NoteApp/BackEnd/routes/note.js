const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const fetchuser = require("../middleware/fetchuser");
const { validationResult, body } = require("express-validator");

// Route 1 :Get All the Note using: GET "/api/note/fetchallnote". Login required
router.get("/fetchallnote",
  fetchuser, async (req, res) => {
  // fetchuser is a middleware.
  try {
    // get the all note from user
    const note = await Note.find({ user: req.user.id }); // req.user is come frome fetchuser middelware.
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 2 :Add A New  Note using: POST "/api/note/addnote". Login required
router.post("/addnote",
  fetchuser, // fetchuser is a middleware.
  [
    body("title", "title Must Be Minimum 3 Characters").isLength({ min: 3 }),
    body("description", "Description Must Be Minimum 5 Characters").isLength({
      min: 5,
    }),
  ] /*for validation do code in []array */,
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // if any error retun bad Request and error.
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }

      // Create and Save A New Note.
      const note = new Note({ title, description, tag, user: req.user.id });
      const savenote = await note.save();
      res.json(savenote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3 : Updating An existing Note using: PUT "/api/note/updatenote/:id". Login required
router.put("/updatenote/:id", // "/:id"  is  parameter.its referr specific note id
  fetchuser,
  async (req, res) => {
    const { title, description, tag } = req.body;
    try {
      // Creact newNote object and asian values to newNote object.
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      // find a note witch wont to updead.
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }

      // cheking a user own this note.
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }

      // updead a note if user own this.
      note = await Note.findByIdAndUpdate(
        req.params.id, // "req.params.id" is identifier of the specific note
        { $set: newNote }, //updates the document with the fields and values in the newNote object.
        { new: true } // This option specifies that the method should return the updated document rather than the original one.
      );
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 4 : Deleting An existing Note using: DELETE "/api/note/deletenote/:id". Login required
router.delete("/deletenote/:id",
  fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // find a note witch wont to delete.
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // cheking a user own this note.
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // delete a note if user own this note.
    note = await Note.findByIdAndDelete(req.params.id); // "req.params.id" is identifier of the specific note.
    res.json({ success: "Your Note has benn deleted." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
