const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB URI using environment variables
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Defining a simple schema
const Note = mongoose.model('Note', new mongoose.Schema({
  text: String
}));

// ROOT - Welcome message
app.get('/', (req, res) => {
  res.send('🚀 Welcome! The Kubernetes Node.js app is running successfully!');
});

// POST - Creates a new note
app.post('/notes', async (req, res) => {
  try {
    const note = new Note({ text: req.body.text });
    await note.save();
    res.send(note);
  } catch (err) {
    res.status(500).send({ error: 'Failed to create note' });
  }
});

// GET - Fetches all of the  notes
app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

// DELETE - Removes a note by ID
app.delete('/notes/:id', async (req, res) => {
  try {
    const deleted = await Note.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).send({ error: 'Note not found' });
    }
    res.send({ message: 'Note deleted', note: deleted });
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete note' });
  }
});

// OPTIONAL: DELETE ALL - Wipe the collection
app.delete('/notes', async (req, res) => {
  try {
    await Note.deleteMany({});
    res.send({ message: 'All notes deleted' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete all notes' });
  }
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
