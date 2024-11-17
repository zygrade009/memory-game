import Card from "./Card";
import "../styles/gameScreen.css"
import ScoreCard from "./ScoreCard";
import LossGame from "./LossGame";
import WinGame from "./WinGame";
function GameScreen({showCards,level,handleScoreIncrement,count,chosenCards,setChosenCards,loss,setLoss,handleRestart}) {
  
  const shuffleCards=()=>{
    for (let i = showCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [showCards[i], showCards[j]] = [showCards[j], showCards[i]];
    }
  }
  const handleClickCard=(card)=>{
     if(chosenCards.length===0||!chosenCards.includes(card)){
         setChosenCards((prevChosenCards)=>[...prevChosenCards,card]);
         handleScoreIncrement();
         shuffleCards();
         console.log(card);
     }else{
        console.log("handle lost game");
        setLoss(1);
     }
  }
  console.log(showCards);
  return (
      <>{
        loss? <LossGame handleRestart={handleRestart}/> : count.score===level ? <WinGame handleRestart={handleRestart}/> :<div className="GameContainer">
        <ScoreCard score={count.score} highScore={count.highScore}/>
        <div className="GameCardContainer">
       {showCards && showCards.map((card,index)=>(
        <Card key={index} name={card.name} image={card.image} handleClick={()=>{handleClickCard(card)}}/>
       ))}
    </div>
  </div>
      }
      </>
  )
}

export default GameScreen