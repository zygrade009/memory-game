import "../styles/levelSelector.css";
function LevelSelector({level,setLoading,setLevel,children}) {
  const handleClick=()=>{
    setLevel(level);
    setLoading(1);
  }
  return (
    <div className="levelSelector-container">
        <div className="level-title" onClick={handleClick}>{children}</div>
    </div>
  )
}

export default LevelSelector