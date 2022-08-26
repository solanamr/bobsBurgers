import mongoose from "mongoose";


(async function CONEXION_DATA(){
   try{
   const db = await mongoose.connect('mongodb://localhost/bobsBurgers')
    console.log('DB is connected to:', db.connection.name)
   }catch(error){
    console.log(error)
   }
})()

