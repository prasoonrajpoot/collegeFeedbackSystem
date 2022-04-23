import express from "express";
import passport from "passport";
import findOrCreate from "mongoose-findorcreate";

import Students from "../models/students.js";


import Google from "passport-google-oauth20"

var app = express();
var GoogleStrategy = Google.Strategy;




passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/feedback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

  },
  function(accessToken, refreshToken, profile, cb) {
    
    Students.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));



app.get("/", function(req,res){
    // console.log("something in get google auth backend");
    passport.authenticate("google", {scope: ["profile"]});

})

app.post("/", function(req,res){
    // console.log("something in post google auth backend");
})


export default app;