import db from '../models/AssocModel.js';
import path from "path"; 
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';    

export const getCustomer = async(req,res)=>{ 
    try{
        const response = await db.models.Customer.findAll(); 
        res.status(200).json(response);
    } catch(error){
        console.log(error.message)
    }
}

export const createCustomer = async (req, res) => {
    try {
        const { user_id } = req.body;
        const user = await db.models.Users.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        const newCustomer = await db.models.Customer.create({ user_id });
        res.status(201).json({ msg: "Customer created successfully", customer: newCustomer });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};