const router=require('express').Router();
const passport=require('passport');



        router.get('/login', function(req, res, next) {            
         res.render('login', {user:req.user, title: 'Express template test ' , layout: "../views/layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
        });

        router.get('/logout',(req,res)=>{
            req.logout();
            res.redirect('/');
        })

        router.get('/google',passport.authenticate('google',{
            scope:['profile']
        }));

        //callback route for google to redirect

        router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{                    
          res.redirect('/profile/');          
        });


module.exports=router;
