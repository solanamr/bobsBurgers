import { Router } from "express";
const router = Router()
import {getCharacters, getCharacterById, postCharacter} from '../controllers/index';

router.post('/characters', postCharacter)
router.get('/characters', getCharacters)
router.get('/characters/:id', getCharacterById)



export default router