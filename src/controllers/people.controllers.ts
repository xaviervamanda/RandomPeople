import { getRandomPerson } from "../services/people.services";
import httpStatus from "http-status";
import { Request, Response } from "express";
export async function getPerson (req: Request, res: Response){
    try{
        const person =  await getRandomPerson();
        return res.status(httpStatus.OK).send(person.rows[0]);
    } catch (error){
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
    
}