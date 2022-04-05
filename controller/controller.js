const { default: mongoose } = require('mongoose');
var bookDb = require('../DTOs/bookDTO');

exports.findOne = (req, res) =>{
    if(!req.params.id){
        return res.status(400)
        .send({message:"Null is provided!"})
    }
    var id = new bookDb.ObjectId(req.params.id);
    bookDb.findOne({"_id":id})
    .then(data => {
        if(!data){
            res.status(404).send({message:"Not Found!"})
        }else{
            res.send(data);
        }
    })
    .catch(e => {
        res.status(500).send({message:e || "Error occured!"})
    })
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400)
        .send({message:"Null is provided!"})
    }
    var id = req.params.id;
    bookDb.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data){
            res.status(404).send({message:"book not found!"})
        }else{
            send(data)
        }
    })
    .catch(e => {
        res.status(500).send({message:e || "Error occured!"})
    })
}

exports.create = (req, res) => {
    console.log(req.body)
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }
    const book = new bookDb({
        id:req.body.id,
        name:req.body.name,
        author:req.body.author,
        genre:req.body.genre,
        bookedBy:req.body.bookedBy
    });

    book
    .save(book)
    .then(data => {
        res.redirect('/')
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured!"
        });
    });
}

exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        bookDb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:"Book not found!"})
            }else{
                res.send(data);
            }
        }).catch(e => {
            res.status(500).send({message:e})
        })
    }else{
    bookDb.find()
    .then(book => {
        res.send(book)
    })
    .catch(e => {
        res.status(500).send({message:e || "Error occured!"})
    })
}
}



exports.delete = (req, res) => {
    bookDb.findByIdAndDelete(req.params.id)
    .then(r => {
        if(!r){
            res.status(404).send({message:"Not found"});
        }else{
            res.send({message:"Successfully deleted!"})
        }
    })
    .catch(e => {
        res.send({message:"Error occured!"})
    })
}