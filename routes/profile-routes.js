const router=require('express').Router();

const authCheck=(req,res,next)=>{
    if(!req.user){
        res.redirect('/auth/login');
    }else{
        next();
    }
};

// router.get('/',authCheck,(req,res)=>{
//     res.render('profile', {user:req.user, title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
// });


router.get('/',authCheck,(req,res)=>{
    //res.send('Logged in '+req.user.username);
    //res.render('profile');
    res.render('profile', { user:req.user, title: 'Express template test ' , layout: "layout.ejs"}); // Specify layout file for different page (e.g about-us , dashboard )
})


module.exports=router;