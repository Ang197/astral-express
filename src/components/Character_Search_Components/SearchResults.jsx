function Results(props){
    const {results} = props;
    if (!Array.isArray(results)) {
        return <p>No results found</p>
    }

    return(
        <>
            {results.map((character) => (
                <div className="characterSearchResults" key={character.name}>
                    <h1>{character.name}</h1>
                    <img src={`https://genshin.jmp.blue/characters/${character.name.toLowerCase()}/icon-big`}/>
                    <p>Rarity: {character.rarity} star</p>
                    <p>Vision: {character.vision}</p>
                    <p>Weapon type: {character.weapon}</p>
                    <p>Birthday: {character.birthday}</p>
                    <p>{character.description}</p>
                </div>
            ))}   
        </>
    )
}

export default Results;