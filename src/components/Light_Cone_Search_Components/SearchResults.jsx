import SearchFormat from '../SearchFormat'

function Results({results}){
    if (!Array.isArray(results)) {
        return <p>No results found.</p>;
    }

    return(
        <>
            {results.map((weapon) => (
                <div key={weapon.name}>
                    <h1>{weapon.name}</h1>
                    <img src={`https://genshin.jmp.blue/weapons/${SearchFormat(weapon.name.toLowerCase())}/icon`} alt="Weapon Image"/>
                    <p>Rarity: {weapon.rarity} star</p>
                    <p>Weapon Type: {weapon.type}</p>
                    <p>Weapon Location: {weapon.location}</p>
                    <p>Weapon Passive: {weapon.passiveName} ({weapon.passiveDesc})</p>
                </div>
            ))}   
        </>
    )
}

export default Results;