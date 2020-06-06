const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose
    .connect('mongodb://localhost:27017/messages', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to the database');
})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});