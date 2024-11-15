import "../styles/Score.css";
function ScoreCard({score,highScore}) {
  return (
    <div className='score-container'>
         <div className='score-title'>Score : {score}</div>
         <div className='score-title'>High Score : {highScore}</div>         
    </div>
  )
}

export default ScoreCard;