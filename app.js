import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { indexRouter } from "./routes/index.js";
import { newMessageRouter } from "./routes/newMessage.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const assestPath = path.join(__dirname,"public");

app.use(express.urlencoded({extended: true}));
app.use(express.static(assestPath));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use("/", indexRouter);
app.use("/new",newMessageRouter);
app.use((err,req,res,next)=>{
    res.status(err.statusCode).send(err.message);
});

const PORT = 3000;
app.listen(3000,(err)=>{
    if(err) throw err;
});