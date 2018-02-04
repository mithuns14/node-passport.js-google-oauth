const express=require('express');
const authRoutes=require('./routes/auth.route');
const profileRoutes=require('./routes/profile-routes');
const expressLayout=require("express-ejs-layouts");
const path = require('path');
const bodyParser = require('body-parser');
const passportSetup=require('./config/passport-setup');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const coockieSession=require('cookie-session');
const passport=require('passport');

const app=express();
const port=4000;

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(coockieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieKey]
}));

//initialize passport

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.use(expressLayout);
//app.use(bodyParser());
//app.use(bodyParser.urlencoded({extended: true}));

app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);






mongoose.connect(keys.mongodb.dbURI,(err,data)=>{
    console.log('Connected to MongoDB');
})


app.get('/', function(req, res, next) {
    res.render('home', {user:req.user, title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
   });

//    app.get('/profile', function(req, res, next) {
//     res.render('profile', { title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
//    });

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

