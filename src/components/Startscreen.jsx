import LevelSelector from "./LevelSelector";

import "../styles/Screen.css";
function Startscreen({setLevel, setLoading}) {

  return (
    <div className="small-container">
       <LevelSelector level={4} setLevel={setLevel} setLoading={setLoading}>Easy</LevelSelector>
       <LevelSelector level={6} setLevel={setLevel} setLoading={setLoading}>Medium</LevelSelector>
       <LevelSelector level={8} setLevel={setLevel} setLoading={setLoading}>Hard</LevelSelector>       
    </div>
  );
}

export default Startscreen;