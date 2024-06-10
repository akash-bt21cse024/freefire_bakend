const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const connectDb = require('./utils/connectdb');
const cors = require('cors');
const{signup,login}= require('./utils/user.util');

const {gamepost,getallgame}=require('./utils/game.util');
app.use(express.json());
app.use(cors());

connectDb();
app.post('/api/auth/signup',signup)
app.post('/api/auth/login',login)
app.post('/',gamepost)
app.get('/',getallgame);




mongoose.connection.once('open',()=>{
   console.log('-----------connected to db-------------');
  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
});