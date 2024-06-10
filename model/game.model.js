const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    id:{type:String,required:true,unique:true},
    price:String
  }
)

const game = mongoose.model('game', gameSchema);

module.exports = game;