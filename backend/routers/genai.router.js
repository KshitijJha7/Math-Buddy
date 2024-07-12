import express, { response } from 'express'
const genAiRouter = express.Router();
import { ask } from '../genAi/fetch.js';

genAiRouter.post("/solve",async (req,res)=>{
   const  {question} = req.body;
   const ans =  await ask(question);
   res.json({solution: ans});
   res.status(200);
})

export default genAiRouter