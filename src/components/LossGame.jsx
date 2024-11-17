import "../styles/Screen.css";
import "../styles/levelSelector.css";
import Button from "./Button";
function LossGame({handleRestart}) {
  
  return (
    <div className="small-container">
        <img src="src\assets\loss.png" alt="loss" />
        <div className="headline">You Lose !</div>
        <Button handleRestart={handleRestart}>Restart</Button>
    </div>
  )
}

export default LossGame;