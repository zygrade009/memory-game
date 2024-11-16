import "../styles/card.css"
function Card({name, image,handleClick}) {
  
  return (
    <div className='Card-container'onClick={
      handleClick}>
        <img src={image} alt={name} />
         <div className="Card-title">{name}</div>
    </div>
  )
}

export default Card;