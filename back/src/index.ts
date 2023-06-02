import express, {Express, Request, Response} from "express";
import * as dotenv from 'dotenv';
import {resolve} from "path" ;
import cors from "cors" ;

dotenv.config({
    path: resolve(__dirname, "../.env"),
}) ;

const app : Express = express() ;
const port = process.env.PORT ;

const whiteList: string[] = [
    "http://localhost:3000"
] ;

const corsOption = {
    origin: (origin, callback) => {
        if(!origin || whiteList.indexOf(origin) !== -1)
            callback(null,true) ;
        else callback(new Error("Not allowed by CORS policy.")) ;
    },
    credentials: true
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", ( req: Request , res: Response) => {
    res.json({
        message : "Bienvenue sur le serveur de l'application la carte aux trésors !"
    }) ;
}) ;

app.listen(port, () => {
    console.log(`Le serveur vient de se lancer. Il est accessible à l'adresse suivante : http://localhost:${port} ! `) ;
}) ;