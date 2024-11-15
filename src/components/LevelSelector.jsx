import "../styles/levelSelector.css";
function LevelSelector({children}) {
  return (
    <div className="levelSelector-container">
        <div className="level-title">{children}</div>
    </div>
  )
}

export default LevelSelector