import express,{Request, Response} from"express";
import { getClient } from "../db";
import ShoutOut from "../models/ShoutOut";

export const shoutOutRoutes = express.Router();

shoutOutRoutes.get("/", async (req:Request,res:Response) => {
    try{
        const client = await getClient();
        const result = client.db("Shoutout").collection<ShoutOut>("Shoutout").find({}).toArray();

        return res.status(200).json(result);
    }
    catch(error){
        console.log(error);
        return res.status
    }
});