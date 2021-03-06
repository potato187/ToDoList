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
    const Tasks = db.get('tasks').value();
    res.render('index',{
        date : new Date().toJSON().slice(0,10).replace(/-/g,'/'),
        Tasks : Tasks,
        display : Tasks.length == 0 ? 'block' : 'none'
    });
})

app.post('/api/create', (req, res) =>{
    db.get('tasks').push({id:shortId.generate(), task: req.body.task}).write();
    res.redirect('/');
})


app.delete('/api/delete/:id', (req, res) =>{
    db.get('tasks').remove({id : req.params.id}).write(); 
    res.status(200);
});

app.delete('/api/delete/', (req, res) =>{
    db.get('tasks').remove().write(); 
    res.status(200);
});


app.listen(PORT, () =>{
    console.log(`http://localhost:${3000}`);
}) 