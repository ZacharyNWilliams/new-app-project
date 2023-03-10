import {ObjectId} from "mongodb";

export default interface ShoutOut{
    id?: ObjectId,
    to:string,
    from:string,
    text:string
}