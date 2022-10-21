const mongoose = require('mongoose');
const db = 'mongodb+srv://Osas:techgirl@cluster0.jzy60.mongodb.net/mongodb?retryWrites=true&w=majority'
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to MongoDB successfully!'))
 .catch((Error) => console.log(Error))

module.exports = db;
