const router=require('express').Router();
const passport=require('passport');



        router.get('/login', function(req, res, next) {
            console.log(__dirname);
         res.render('login', { title: 'Express template test ' , layout: "../views/layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
        });

        router.get('/google',passport.authenticate('google',{
            scope:['profile']
        }));

        //callback route for google to redirect

        router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
            res.send('you reached the call back URI');
        })


module.exports=router;
