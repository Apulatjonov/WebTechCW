const e = require('express');
const a = require('axios');
const r = e.Router();
const controller = require('../controller/controller');
const { default: axios } = require('axios');

r.get('/', (req, res) => {
    a.get('http://localhost:3/api/books')
    .then(function(response){
        console.log(response.data);
        res.render('index', {books:response.data});
    })
    .catch(e => {
        console.log(e);
    })
})

r.get('/:id', (req, res) => {
    axios.get('')
})

r.get('/addBook', (req, res) => {
    res.render('addBook')
})

r.put('/:id', (req, res) => {
    axios.put('/api/books/' + req.params.id, {params:{id:req.query.id}})
    .then(function(bookdata){
        res.render("editBook", {book:bookdata.data})
    })
    .catch(e => {
        res.send(e);
    })
})

r.delete('/:id', (req, res) => {
    axios.delete('/api/books/' + req.params.id);
})

r.post('/api/books', controller.create);
r.get('/api/books', controller.find);
r.get('/api/books/id', controller.findOne);
r.delete('/api/books/', controller.delete);
r.put('/api/books/id', controller.update);

module.exports = r