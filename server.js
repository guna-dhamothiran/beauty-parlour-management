// Assuming you've set up a basic Express server with MongoDB connection

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/your-database-name';

router.post('/submit-form', (req, res) => {
  // Extract form data from request body
  const formData = req.body;

  // Connect to MongoDB
  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Access the database
    const db = client.db();

    // Access the collection
    const collection = db.collection('contacts'); // Assuming you have a collection named 'contacts'

    // Insert the form data into the collection
    collection.insertOne(formData, (err, result) => {
      if (err) {
        console.error('Error inserting document:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('Form data saved successfully:', result);
      res.status(200).json({ message: 'Form data saved successfully' });
    });
  });
});

module.exports = router;
