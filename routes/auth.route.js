const router=require('express').Router();



        router.get('/login', function(req, res, next) {
            console.log(__dirname);
         res.render('login', { title: 'Express template test ' , layout: "../views/layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
        });


module.exports=router;
