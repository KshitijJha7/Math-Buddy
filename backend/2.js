import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

const apiKey = "363607e9c7874adb9c43aa0495287fd9";
async function getNews(query, category) {
  var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return []; 
  }
}

getNews('Narendra Modi', 'technology')
  .then(articles => {
    console.log('News Articles:', articles);
  })
  .catch(error => {
    console.error('Error:', error);
  });