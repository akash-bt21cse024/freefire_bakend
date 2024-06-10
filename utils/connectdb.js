const mongoose = require('mongoose');


const connectDb =async()=>{
  try{
    await mongoose.connect('mongodb+srv://bt21cse024:akash@ff.ehurovn.mongodb.net/?retryWrites=true&w=majority&appName=ff');
   console.log("connected to db------");

  }
  catch(err){
    console.log('this is err--',err)
  }
}




module.exports=connectDb;