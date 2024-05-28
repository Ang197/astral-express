function Results({results}){
    if (!Array.isArray(results)) {
        return <p>No results found.</p>;
    }

    return(
        <>
            {results.map((character) => (
                <div key={character.name}>
                    <h1>{character.name}</h1>
                    <h5>Rarity: {character.rarity} star</h5>
                    <p>Birthday: {character.birthday}, Vision: {character.vision}</p>
                    <p>{character.description}</p>
                    {/* <img src={character.name.availableImages} alt="Character Image"/> */}
                </div>
            ))}   
        </>
    )
}

export default Results;