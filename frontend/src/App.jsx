import { useState } from 'react'
import './App.css'
import MathComponent from './components/math';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logoImage from './assets/MathBuddy.png';

function App() {
  const [text,setText] = useState("Ask a math question to get instant answer");
  const [query,setQuery] = useState("Ask your Math doubt");
  const getAns = async (event)=>{
    event.preventDefault();
    console.log("here")
    setText("Thinking.....");
    const response = await fetch("/api/solve/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          question: query
        })  
    })
    const data = await response.json();
    console.log(data.solution);
    setText(data.solution);
  };

  const setQ = async (event)=>{
    setQuery(event.target.value);
  }

  
return (
    <>
      <div className="logo">
        <img src={logoImage} alt="Logo Hona toh chahiye tha" class="logoImage"/>
      </div>
      <div className="container">
      <input type="text" className="rounded-input" value={query} onChange={setQ} ></input>
      <button className="rounded-button" onClick={getAns}>Ask</button>
      </div>
      <Card sx={{ minHeight: 150,maxWidth:900}}>
        <CardContent>
        <MathComponent mathExpression={text}></MathComponent> 
        </CardContent>
      </Card>      
    </>
  )
}

export default App

