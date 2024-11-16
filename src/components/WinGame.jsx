import "../styles/Screen.css";
import "../styles/levelSelector.css";
function WinGame() {
  return (
    <div className="small-container">
          <img src="src\assets\win.jpg" alt="win" />
          <div className="level-title">You Won!</div>
    </div>
  )
}

export default WinGame