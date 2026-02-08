import { Router } from "express";
import { getMessageByID } from "../controllers/getMessageById.js";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  }
];

indexRouter.get("/",(req,res)=>{
    res.render("index",{title: "Mini Messageboard", messages: messages});
})
indexRouter.get("/message/:messageID",getMessageByID);

export {indexRouter,messages};