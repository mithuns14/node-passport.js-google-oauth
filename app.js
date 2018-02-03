const express=require('express');
const authRoutes=require('./routes/auth.route');

const app=express();
const port=3000;

app.use(express.static(__dirname + '/styles'));

app.set('view engine','ejs');

app.use('/auth',authRoutes);

app.listen(port,()=>{
    console.log('App listening on ',port);
})

app.get('/',(req,res)=>{
    res.render('home');
})

// app.get('/login',(req,res)=>{
//     res.render('login');
// })

