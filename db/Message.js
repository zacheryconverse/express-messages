//Message Model
// If you are using mongo/mongoose create your schema here
const mongoose = require('mongoose');
const db = require('./mongoconfig');

const {Schema} = mongoose;

const MessageSchema = new Schema({
    id: Number,
    name: String,
    message: String
})


const Message = mongoose.model('Message', MessageSchema);

null;

module.exports = Message;
// {
//     id: 1,
//     name:'Criminal',
//     message:'What Are You?'
//   }

// user_id: "abc123",
// age: 55,
// status: "A"