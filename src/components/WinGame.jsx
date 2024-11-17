import "../styles/Screen.css";
import "../styles/levelSelector.css";
import Button from "./Button";
function WinGame({handleRestart}) {
 
  return (
    <div className="small-container">
          <img src="src\assets\win.jpg" alt="win" />
          <div className="headline">You Won!</div>
          <Button handleRestart={handleRestart}>restart</Button>
    </div>
  )
}

export default WinGame