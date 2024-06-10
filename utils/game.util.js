const game = require('../model/game.model');

const gamepost = async(req,res) => { 
  try{
    console.log("-------------------------",req.body)
   const {id,price}=req.body; 
   const flag=await game.findOne({id});
   if(!flag){
     const games=new game({id,price});
     await games.save();
     res.status(201).json({
       status:"success",
     });
   }else{
     res.status(400).json({
       status:"fail",
       data:{errorMessage:"it is already in game"}
     });
   }
  }
  catch(err){
    console.log("this is err--",err)
  }
}

const getallgame=async(req,res)=>{
  try{
    const games=await game.find();
    res.status(200).json({
      status:"success",
      data:games
    });
  }
  catch(err){
    console.log("this is err--",err)
  }
}

module.exports={gamepost,getallgame};