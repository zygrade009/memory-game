import { useState,useEffect } from "react";
import getPokemons from "./pokemon";
import Card from "./components/Card";
import Header from "./components/Header";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import Startscreen from "./components/Startscreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [isLoading,setLoading] = useState(true);
  const [characters,setCharacters]=useState([]);
  const [level,setLevel]=useState(0);
  const [Cards,setCards]=useState([]);
  const [count,setCount]=useState({score:0,highScore:0});
  const [chosenCards,setChosenCards]=useState([]);
  const [loss,setLoss]=useState(0);
  useEffect(()=>{
    try {
      getPokemons(setCharacters);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    
  },[]);
  
  useEffect(()=>{
    let showCards=[];
    while(showCards.length!==level){
      let index=Math.floor(Math.random()*characters.length);
      if(showCards.length===0||!showCards.includes(characters[index])){
        showCards.push(characters[index]);
      }
    }
    setCards(showCards);
    setLoading(0);
  },[level,characters]);
  
  const handleScoreIncrement=()=>{
    setCount((prevCount)=>({score: prevCount.score+1,
      highScore : (prevCount.highScore>prevCount.score+1)?prevCount.highScore:prevCount.score+1,
    }));
    
  }
  const handleRestart=()=>{
      setCount((prevCount)=>({
        score: 0,
        highScore: prevCount.highScore,
      }));
      setLoss(0);
      setLevel(0);
  }
  return (
    <div className="app-container">
      <Header/>
      <div className="container">
       <div className="content">
       {
        isLoading? <LoadingScreen/>:  
         level===0?<Startscreen 
         setLevel={setLevel} 
         setLoading={setLoading}
         />:
         <GameScreen 
         showCards={Cards} 
         level={level} 
         chosenCards={chosenCards} 
         setChosenCards={setChosenCards} 
         count={count} 
         handleScoreIncrement={handleScoreIncrement}
         loss={loss}
         setLoss={setLoss}
         handleRestart={handleRestart}
         />

       }
       </div>
      </div>
    </div>
  )
}

export default App;
{/* <div>
            {characters && characters.map((character, index) => (
           <Card  key={index} name={character.name} image={character.image}/>
           ))}
          </div>  */}