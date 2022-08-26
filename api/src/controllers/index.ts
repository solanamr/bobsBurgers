import axios from 'axios';
import { RequestHandler } from "express";
import characterSchema from '../models/characters'


export const apiData = async() =>{
    try{
        const getInfo = await axios.get(`https://bobsburgers-api.herokuapp.com/characters?sortBy=name&OrderBy=asc&limit=40`)
        console.log(getInfo)
        const getApi = getInfo.data.map((r: any) =>{
           return{
            id: r.id,
            name: r.name,
            image: r.image,
            occupation: r.occupation
           }
        })
        return getApi

    }catch(error){
        console.log(error)
    }
}


//**Post made only for uploading api information to the data base**

export const postCharacter: RequestHandler = async (req, res) =>{
    try {
        const charactersApi = await apiData()
        const saveCharacter = await characterSchema.insertMany(charactersApi)

        res.send('Save characters')

    } catch (error) {
        res.status(404).send(error)
    }
}



//** Get request for catching api data and query search **

export const getCharacters: RequestHandler = async (req,res) =>{
    try {
        const name = req.query.name?.toString()
        const characters = await characterSchema.find({},{_id:0, __v:0});
        if(name){
            const characterQuery = characters.filter(c => c.name?.toLowerCase().includes(name.toLowerCase()))
            if(characterQuery.length > 0){
                res.send(characterQuery)
            }else{
                res.status(404).send('Character not found')
            }
        }else{
            res.send(characters)
        }
        
    } catch (error) {
        res.status(404).send(error)
    }
    
}


//** Get request for searching characters by ID **

export const getCharacterById: RequestHandler = async (req, res) =>{
    try{
        const { id } = req.params
        const idCharacter = await characterSchema.findOne({id},{_id:0,__v:0})
            res.send(idCharacter)
       
    }catch(error){
        res.status(404).send(error)
    }
}

