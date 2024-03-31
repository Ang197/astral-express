function Results({results}){
    if (!Array.isArray(results)) {
        return <p>No results found.</p>;
    }

    return(
        <>
            {results.map((character) => (
                <div key={character.name}>
                    <h3>{character.name}</h3>
                    <p>Birthday: {character.birthday}, Vision: {character.vision}</p>
                    <p>{character.description}</p>
                    {/* <img src={character.name.availableImages} alt="Character Image"/> */}
                </div>
            ))}   
        </>
    )
}

export default Results;