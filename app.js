const express = require('express');


const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('views engine', 'pug');
app.set('views','./views');


app.listen(PORT, () =>{
    console.log(`http://localhost${3000}`);
})