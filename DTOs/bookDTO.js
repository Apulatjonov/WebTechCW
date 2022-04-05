const mongoose = require('mongoose');

var s = new mongoose.Schema({
    name:{
        type:String,
        required: false
    },
    author:{
        type:String,
        required: false
    },
    genre:{
        type:String,
        required:false
    },
    takenBy:{
        type:String,
        required:false
    }
}, {
    collection:'11069'
})

function randomNum(){
    return Math.floor(Math.random() * 1000) + 1;
}

const bookDb = mongoose.model('bookDTO', s);


module.exports = bookDb;