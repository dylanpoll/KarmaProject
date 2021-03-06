const express = require('express');  // retrieves the package
const app = express();// app is used to call express
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//import routes
    app.use(bodyParser.json());
    const postRoute = require('./routes/posts') // the './' indicates it is in a subfolder
    const userRoute = require('./routes/users') // the './' indicates it is in a subfolder
    const newUserRoute = require('./routes/register')
//middlewares
    app.use(cors());
    app.use('/posts',postRoute);//imports the posts.js, preps for middleware etc
    app.use('/users',userRoute);
    app.use('/register',newUserRoute);
//route
    app.get('/',(req,res) => {//(req,res) = request and response
            res.send('Dylan\'s express is running.. this is home')
                });
//connect to DB
    mongoose.connect(
            process.env.DB_CONNECTION,// process calls the file ".env", and pulls what DB_CONNECTION is equivalent to
            {useNewUrlParser:true,useUnifiedTopology: true },
            ()=> console.log('Hacked the mainframe... we got into the database...')//feed-back
            );

//turning on the server
    app.listen(5000)//to start listning to the server this is done. the number is the port.