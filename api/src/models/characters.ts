import { Schema, model } from "mongoose";

const characterSchema = new Schema({
    id: Number,
    name: String,
    image: String,
    occupation: String
})

export default model('characters', characterSchema)