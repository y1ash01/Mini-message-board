import { Router } from "express";
import { messages } from "./index.js";

const newMessageRouter = Router();

newMessageRouter.get("/",(req,res)=>{
    res.render("form");
})

newMessageRouter.post("/",(req,res)=>{
    const user = req.body.name;
    const message = req.body.message;
    messages.push({text: message, user: user,added: new Date(),id : messages.length + 1});
    res.redirect("/");
});

export {newMessageRouter};