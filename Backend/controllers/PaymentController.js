import db from '../models/AssocModel.js';
import path from "path"; 
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';    

export const getPayment = async(req,res)=>{ 
    try{
        const response = await db.models.Payment.findAll(); 
        res.status(200).json(response);
    } catch(error){
        console.log(error.message)
    }
}
