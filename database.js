const mongoose = require('mongoose');

// Your MongoDB connection string
const mongoDB = 'mongodb+srv://HetPtl4444:wsJu3i6MWjbbSWgU@cluster0.90h16vu.mongodb.net/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // We're connected!
  console.log("Successfully connected to MongoDB.");
});
