import LevelSelector from "./LevelSelector"

import "../styles/StartScreen.css";
function Startscreen() {

  return (
    <div className="start-container">
       <LevelSelector >Easy</LevelSelector>
       <LevelSelector >Medium</LevelSelector>
       <LevelSelector >Hard</LevelSelector>       
    </div>
  )
}

export default Startscreen;