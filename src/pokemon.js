let cards;

const getPokemons= async(setCharacters)=>{
    try {
        const response= await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        cards= data['results'].map((character)=>{
            return {
                name: character.name,
                image: character.image,
            }
        });
        cards=cards.filter((card)=>{
            return card.name!=="Antenna Rick"
        });
        setCharacters(cards);
    } catch (error) {
        console.log(error);
    }
}
export default getPokemons;
