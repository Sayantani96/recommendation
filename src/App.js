
import { useState } from 'react';
import './App.css';

function App() {
  const [recommendations,setRecommendations]=useState({});
  const categories={
    "javascript":{
      "Eloquent JavaScript":"4/5",
      "You Don't Know JS":"3.5/5"
    },
    "fiction":{
      "Shiva Trilogy":"5/5",
      "Harry Potter and the Sorcerer's Stone":"4.5/5"
    },
    "business":{
      "Never Split the Difference":"3.5/5",
      "Loonshots":"5/5"
    }
  };
  const clickHandler=(category)=>{
    setRecommendations(categories[category]);
    console.log(recommendations);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div style={{margin:"50px"}}>
      {
        Object.keys(categories).map((category)=>{
          return <span className='category' onClick={()=>clickHandler(category)} key={category}>{category}</span>
        })
      }
      </div>
      
      <hr></hr>
<ul style={{listStyle:"none"}}>
{
        Object.keys(recommendations).map((recommendation)=>{
         return <li key={recommendation} className="content-card">
           <div style={{fontSize:"25px"}}> {recommendation} </div>
           <div>{recommendations[recommendation]}</div>
          </li>
        })
      }
</ul>
     
    </div>
  );
}

export default App;
