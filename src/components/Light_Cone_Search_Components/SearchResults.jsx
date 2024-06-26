function Results({results}){
    if (!Array.isArray(results)) {
        return <p>No results found.</p>;
    }

    return(
        <>
            {results.map((weapon) => (
                <div key={weapon.name}>
                    <h1>{weapon.name}</h1>
                    <p>Rarity: {weapon.rarity} star</p>
                    <p>Weapon Type: {weapon.type}</p>
                    <p>Weapon Passive: {weapon.passiveName} ({weapon.passiveDesc})</p>
                    {/* <img src={weapon.name.availableImages} alt="weapon Image"/> */}
                </div>
            ))}   
        </>
    )
}

export default Results;