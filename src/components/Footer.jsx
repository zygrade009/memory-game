import "../styles/footer.css"
import clickSound from "../assets/sound/pokemon-a-button.mp3";
import playAudio from "../utils/audioPlay.js";
import {useState} from "react";
function Footer() {
  const [isMusicON,setMusicON]=useState(false);
  
  const clickAudio = new Audio(clickSound);
  clickAudio.volume = 0.3;

  return (
    <div className="footer-container">
          <div className="Music">
          {isMusicON?<img src="src\assets\music-on.png" alt="music-on" onClick={()=>
            {
              playAudio(clickAudio);
              setMusicON(!isMusicON);
              
            }}/>:<img src="src\assets\music-off.png" alt="music-off" onClick={()=>{
              playAudio(clickAudio);
              setMusicON(!isMusicON);
              
            }}/>}
          </div>
    </div>
  )
}

export default Footer