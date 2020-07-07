const http = require('http')
const express = require('express')
const app = express();
const port = process.env.PORT || 80;

app.set('view engine', 'ejs');
app.use(express.static(__dirname+ '/Content'));
app.get('/', (req, res)=>{ 
    res.render('home');
});

app.get('/contact', (req, res)=>{
res.render('ContactUs');
});

app.get('/about', (req, res)=>{
res.render('AboutUs');
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