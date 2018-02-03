const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');
const keys=require('./keys');
const User=require('../models/user-model');

passport.use(new GoogleStrategy({
//options for google strategy
callbackURL:'/auth/google/redirect',
clientID:'260050179255-drcar198r2h4iggpe5iqp603r1589gc5.apps.googleusercontent.com',
clientSecret:'lrA7DvvptmOg8FqN4CTpemRj'

}, (accessToken,refreshToken,profile,done)=>{

    //passport call back function.
console.log('passport call back function fired');


console.log(profile);

// var myData = new User({
//     username:profile.displayName,
//     googleId:profile.id

// });


// console.log(myData);

//check user exits

User.findOne({
    googleId:profile.id
}).then((currentUser)=>{
    if(currentUser){
        //already have a user
        console.log('User is:',currentUser);

    }else{
        //create a user
        new User({
            username:profile.displayName,
            googleId:profile.id
        }).save().then((newUser)=>{
            console.log('new user created'+newUser);
        })
    }
})



// myData.save(err,res)
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });




})

)