const express=require('express');
const authRoutes=require('./routes/auth.route');
const expressLayout=require("express-ejs-layouts");
const path = require('path');
const bodyParser = require('body-parser');
const passportSetup=require('./config/passport-setup');
const mongoose=require('mongoose');
const keys=require('./config/keys');

const app=express();
const port=4000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.use(expressLayout);
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/auth',authRoutes);


app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

mongoose.connect(keys.mongodb.dbURI,(err,data)=>{
    console.log('Connected to MongoDB');
})


app.get('/', function(req, res, next) {
    res.render('home', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
   });

// app.get('/about', function(req, res, next) {
//     res.render('about', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
//    });

//    app.get('auth/login', function(req, res, next) {
//     res.render('login', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
//    });

// app.get('/users', function(req, res, next) {
//     res.render('users', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
//    });

app.listen(process.env.PORT || port,()=>{
    console.log('App listening on ',port);
});



// app.get('/login',(req,res)=>{
//     res.render('login');
// })

