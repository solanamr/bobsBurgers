import mongoose from "mongoose";


(async function CONEXION_DATA(){
   try{
   const db = await mongoose.connect('mongodb+srv://solanar:160992nj@bobsburgers.kc6a0tc.mongodb.net/?retryWrites=true&w=majority')
    console.log('DB is connected to:', db.connection.name)
   }catch(error){
    console.log(error)
   }
})()

