import db from '../models/AssocModel.js';
import path from "path"; 
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';    

export const getUser = async(req,res)=>{ 
    try{
        const response = await db.models.Users.findAll(); 
        res.status(200).json(response);
    } catch(error){
        console.log(error.message)
    }
}

export const createUser = async (req,res) => {
    try {
        await db.models.Users.create(req.body);
        res.status(201).json({msg: "User created"});
        return newUser;
    } catch (error) {
        console.log(error.message);
    }
};