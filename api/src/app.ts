import express from 'express';
import './db';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import cors from 'cors';
import index from './routes/index';




const app = express()
const PORT = process.env.PORT || 3001

app.use(morgan('dev'))
app.use(cors())
app.use("/", index)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(index)

async function main(){
    try{
        // await mongoose.syncIndexes
    
     app.listen(PORT, () =>{
        console.log(`App listen http://localhost:${PORT}`)
    })
    }catch(error){
        console.error("Unable to connect to the database:", error);
    }
 }

main()
