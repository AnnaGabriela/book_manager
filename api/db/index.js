const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false });

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'Mongo connection error: '));