/* eslint-disable no-useless-concat */
const express = require('express');  // retrieves the package
const router = express.Router();
//imports
    const User = require('../models/user');  //the "model" for our "Post" object
//routes-------------
            //---------------------------------------
            //GET
            //---------------------------------------
                        router.get('/', async (req,res) =>{  // this would be on http://localhost:5000/users
                            try{
                                const users = await User.find(); //this calls the model post(it is a schema) there are additional sub methods of find
                                res.json(users);
                            }catch (err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId', async (req,res) =>{//this pulls the url the user is connecting from
                                try{
                                    let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                    let profile = [discordUser.name,discordUser.karma,discordUser.roles,discordUser.questHistory,discordUser.projectHistory,discordUser.skills,discordUser.level,discordUser.streak];
                                    console.log(profile);
                                    res.json(profile);
                                }catch(err){
                                    res.json({message: err});
                                    console.log({message: err});
                                }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/karma', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.karma;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/name', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.name;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/roles', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.roles;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/level', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.level;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/skills', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.skills;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/streak', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.streak;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/email', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.email;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/idtoken', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.idtoken;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/discordid', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser.discordID;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                        router.get('/findUserDataByDiscordID/:discId'+'/_id', async (req,res) =>{//this pulls the url the user is connecting from
                            try{
                                let discordUser = await User.findOne({'discordID':(req.params.discId)});
                                let content = discordUser._id;
                                res.json(content);//responds with the database object
                                console.log(content);
                            }catch(err){
                                res.json({message: err});
                                console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                            }
                            });
                            //pulls the URL path a user used to connect.
                        router.get('/user/:userId', async (req,res) =>{//this pulls the url the user is connecting from
                                    try{
                                        //const user = await User.findById(req.params.userId);//this searches your collection using the attempted URL entree as a search key
                                        const user = await User.findById(req.params.userId);//this searches your collection using the attempted URL entree as a search key
                                        res.json(user);//responds with the database object
                                        console.log(req.params.userId);
                                    }catch(err){
                                        res.json({message: err});
                                        console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                                    }
                            });
            //---------------------------------------
            //DELETE
            //---------------------------------------
                            //Deletes a field from the collection
                        router.delete('/:userId',async (req,res) =>{
                                try {
                                    const removedUser = await User.remove({_id: req.params.userId});
                                    res.json(removedUser);
                                }catch(err){
                                        res.json({message: err});
                                        console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                                }
                            });
            //---------------------------------------
            //PATCH
            //---------------------------------------
                        router.patch('/changekarma/:userId'+'/:numberValue',async (req,res) =>{
                                try {const updateUser = await User.updateOne({_id: req.params.userId},{$set:{ karma : req.params.numberValue}} );//updates karma
                                    res.json(updateUser);
                                }catch(err){
                                        res.json({message: err});
                                        console.log({message: err});//this logs on console when someone visits http://localhost:5000/posts}
                                }
                            });
                        router.patch('/signIn',async (req,res) =>{
                            try {            
                                    let user = await User.findOne({'_id':(req.body._ID)});            //returns the object that meets this search
                                    let change = ((user.streak) + 1);                                         //increasing values
                                    let karmaChange = ((user.karma) + 5);
                                        await User.updateOne({_id: user._id},{$set:{ streak : change}} );     //updates streak
                                        console.log("added to streak counter");
                                        await User.updateOne({_id: user._id},{$set:{ karma : karmaChange}} ); //updates karma
                                        console.log("added Karma");
                                        let response = (user.name)+" Has been successfully scanned in! \n Karma points are now : "+(karmaChange)+". \n Streak is now :" +(change)+".";
                                        res.text(response);
                                        }catch(err){
                                            res.json({valid : false});
                                            console.log({message: err});
                                            }
                            });
            //---------------------------------------
            //USER LOG IN
            //---------------------------------------
            router.post('/logIn',async (req,res) =>{
                try {            
                        let user = await User.findOne({'email':(req.body.email)});            //returns the object that meets this search
                        let passwordOnFile = user.password;                                         //increasing values
                        let submittedPassword = req.body.password;
                        let response;let adminoruser;
                                if(passwordOnFile === submittedPassword){
                                    if(user.admin === true){
                                    response = user;
                                    adminoruser="admin";
                                    }
                                    if(user.admin === false){
                                        response = user;
                                    adminoruser="user";
                                    }
                                    console.log("logging in "+user.name+" as a "+adminoruser);
                                }
                                if(passwordOnFile !== submittedPassword){
                                    response =    { valid : false,admin : false};
                                        }
                                res.json(response);
                                }catch(err){
                                        res.json({valid : false,admin : false});
                                        console.log("failed in login");
                                        }
                });


//routesEND-------------
module.exports = router;