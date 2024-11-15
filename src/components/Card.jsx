import "../styles/card.css"
function Card({name, image}) {
  return (
    <div className='Card-container'>
        <img src={image} alt={name} />
         <div className="Card-title">{name}</div>
    </div>
  )
}

export default Card;