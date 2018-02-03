const router=require('express').Router();


//auth login

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/logout',(req,res)=>{
    res.send('logging out...');
})

router.get('/google',(req,res)=>{
    res.render('login');
});



module.exports=router;
