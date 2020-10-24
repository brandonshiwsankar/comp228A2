let mongoose = require('mongoose');

// create a model class
let businessContact = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "books"
});

module.exports = mongoose.model('Contact', businessContact);
