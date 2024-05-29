function Results(props){
    const {results} = props;
    if (!Array.isArray(results)) {
        return <p>No results found</p>
    }

    return(
        <>
            {results.map((character) => (
                <div key={character.name}>
                    <h1>{character.name}</h1>
                    <p>Rarity: {character.rarity} star</p>
                    <p>Vision: {character.vision}</p>
                    <p>Weapon type: {character.weapon}</p>
                    <p>Birthday: {character.birthday}</p>
                    <p>{character.description}</p>
                    {/* <img src={character.name.availableImages} alt="Character Image"/> */}
                </div>
            ))}   
        </>
    )
}

export default Results;