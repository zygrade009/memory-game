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
  const [gameStatus,setGameStatus]=useState(0);
  let choice=[];
  
  useEffect(()=>{
    try {
      getPokemons(setCharacters);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    
  },[]);
  let level=5;
  const randomCards=(level)=>{
      while(choice.length!==level){
         let index=Math.floor(Math.random()*characters.length);
         if(choice.length===0||!choice.includes(characters[index])){
           choice.push(characters[index]);
         }
      }
  }
  // if(isLoading){
  //   randomCards(level);
  //   console.log(choice);
  // }
  return (
    <div className="app-container">
      <Header/>
      <div className="container">
       <div className="content">
       {
        isLoading? <LoadingScreen/>:  
         gameStatus===0?<Startscreen/>:<GameScreen/>
       }
       </div>
      </div>
    </div>
  )
}

export default App
{/* <div>
            {characters && characters.map((character, index) => (
           <Card  key={index} name={character.name} image={character.image}/>
           ))}
          </div>  */}