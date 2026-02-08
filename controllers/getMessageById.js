import { messages } from "../routes/index.js";

function getMessageByID(req,res){
    const {messageID} = req.params; 
    const message = messages.find((message)=>{
        return message.id === Number(messageID);
    });
    res.render("message",{message : message, title: "Message Details"});
}

export {getMessageByID};