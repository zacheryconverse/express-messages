const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// if you are using mongo/mongoose uncomment this line
const Message = require('./db/Message');

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route

app.get('/', (req, res) => {
  res.json({'message': 'Welcome folks!'})
})

app.post('/', (req, res) => {
  res.send('PUT request')
})

const newMessage = new Message( {
    id: 1,
    name:'Criminal',
    message:'What Are You?'
})

newMessage.save((err, document) => {
  if (err) throw ('errrorrr');
  console.log(document);
})

const criminal = Message.findOne({name: 'Criminal'})
console.log(criminal);


// db.Message.insertOne( {
//   user_id: "1",
//   name: "Aaron",
//   message: "Who are you?"
//   })

// app.use((req,res,next) => {
//   res.status(404).send('That route does not exist'); // we'll likely want to revisit this function
// });

// require(http)
// http.createServer(...)...
const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
