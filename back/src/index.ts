import express, {Express, Request, Response} from "express";
import * as dotenv from 'dotenv';
import {resolve} from "path" ;
import cors, {CorsOptions} from "cors" ;

dotenv.config({
    path: resolve(__dirname, "../.env"),
}) ;

const app : Express = express() ;
const port: string | undefined  = process.env.PORT ;

const corsOption : CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: process.env.PATH_FRONT,
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

app.use("/api", require("./api/game")) ;

app.listen(port, () => {
    console.log(`Le serveur vient de se lancer. Il est accessible à l'adresse suivante : http://localhost:${port} ! `) ;
}) ;