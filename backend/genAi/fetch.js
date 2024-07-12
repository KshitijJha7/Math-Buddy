import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'
dotenv.config()
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log("herre");

export const ask = async (userPrompt)=> {
  console.log("Request Received");
  console.log(userPrompt);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const appendPrompt = "Solve the following math question.Answer only in math expressions and show steps without text explanation. return the answer as latest MathJax format.If the question is not relevant to Math, answer by saying please ask a quesiton relevant to math. The quetion is :"
  const actualPrompt = appendPrompt + userPrompt
  const result = await model.generateContent(actualPrompt);
  const response = await result.response;
  const str = response.text();
  const ret = str
  .replace(/(?<!\$)\$(?!\$)/g, '')
  .replace(/\frac/g,"\\frac")
  .replace(/#/g," ")
  .replace(/\*/g," ")
  .replace(/\sqrt/g,"\\sqrt")
  .replace(/\lim/g,"\\lim")
  .replace(/\log/g,"\\log")
  .replace(/\prod/g,"\\prod")
  .replace(/\leq/g,"\\leq")
  .replace(/\geq/g,"\\geq")
  .replace(/\alpha/g,"\\alpha")
  .replace(/\beta/g,"\\beta")
  .replace(/\gamma/g,"\\gamma")
  .replace(/\delta/g,"\\delta")
  .replace(/\theta/g,"\\theta")
  .replace(/\pm/g,"\\pm")
  .replace(/\begin/g,"\\begin")
  .replace(/\right/g,"\\right")
  .replace(/\cdot/g,"\\cdot")
  console.log(ret);
    //.replace(/\*\*/g, '\\*\\*') // Convert double asterisks
    //.replace(/\*/g, '\\*')  // Convert single asterisks
    //.replace(/\//g, '//');  // Convert slashes
    return ret;
  }
