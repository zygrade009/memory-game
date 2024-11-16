import "../styles/Screen.css";
import "../styles/levelSelector.css";
function LossGame() {
  return (
    <div className="small-container">
        <img src="src\assets\loss.png" alt="loss" />
        <div className="level-title">You Lose !</div>
    </div>
  )
}

export default LossGame