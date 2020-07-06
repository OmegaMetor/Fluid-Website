const http = require('http')
const express = require('express')
const app = express();
const port = 80

app.set('view engine', 'ejs');
app.use(express.static(__dirname+ '/Content'));
app.get('/', (req, res)=>{ 
    res.render('home');
});


app.get('*', (req, res)=> {
    res.render('404')
})

var server = app.listen(port, ()=>{
    console.log(`Listning on ${port}!`);
})


/*
    Required Pages:
    | Home
    | 404
    | About us
    | Members
    | Contact us
*/