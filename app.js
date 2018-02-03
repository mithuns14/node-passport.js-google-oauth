const express=require('express');
const authRoutes=require('./routes/auth.route');
const expressLayout=require("express-ejs-layouts");
const path = require('path');
var bodyParser = require('body-parser')

const app=express();
const port=3000;

app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/images'));
app.use(expressLayout);
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/auth',authRoutes);


app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');



// app.get('/',(req,res)=>{
//     res.render('layout');
// });

// app.get('/about', function(req, res) {
//     res.render('about', { layout: "layout"}); 
//    });

// app.get('/about',(req,res)=>{
//     debugger
//     res.render('about');
// });

app.get('/', function(req, res, next) {
    res.render('home', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
   });

app.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
   });

   app.get('/pricing', function(req, res, next) {
    res.render('pricing', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
   });

app.get('/users', function(req, res, next) {
    res.render('users', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
   });

app.listen(port,()=>{
    console.log('App listening on ',port);
});



// app.get('/login',(req,res)=>{
//     res.render('login');
// })

