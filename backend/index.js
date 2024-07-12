import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import genAiRouter  from './routers/genai.router.js';

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/",genAiRouter);

const PORT =  process.env.PORT  || 3000; 


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});