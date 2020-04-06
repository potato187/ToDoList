const express = require('express');
const lowDb   = require('lowdb');
const shortId = require('shortid');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({tasks:[]}).write();

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', (req, res) =>{
    res.render('index',{
        date : new Date().toJSON().slice(0,10).replace(/-/g,'/')
    });
})

app.post('/api/', (req, res) =>{
    db.get('tasks').push({id:shortId.generate(), task: req.body.task}).write();
    res.redirect('/')
})

app.listen(PORT, () =>{
    console.log(`http://localhost:${3000}`);
}) 