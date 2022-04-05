const e = require('express');
const lib = e();
const bp = require('body-parser');
lib.use(bp.urlencoded({extended:true}));
const m = require('morgan');
const { application } = require('express');
lib.use(m('tiny'));
lib.use(e.static('css'))
const connection = require('./server')
connection();

const controller = require('../lib_app/controller/controller')
lib.use('/', require('./routes/router'))
lib.use('/id', require('./routes/router'))
lib.use('/addBook', require('./routes/router'))
lib.engine('pug', require('pug').__express)
lib.set('view engine', 'pug')

// lib.get('/addBook',(req, res) =>{
//     res.render('addBook');
// })


lib.listen(3)