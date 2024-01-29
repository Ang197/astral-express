import '../style/search.css'
import { useState } from 'react'

/**
 * Used to search for anything, including information found
 * on other pages such as characters in the characters page,
 * or light cones in the light cones page
 */

function Search() {
    const [input, setInput] = useState("")
    const DATA_URL = "https://genshin.jmp.blue/characters"
    const fetchData = (value) => {
        fetch(DATA_URL)
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((characters) => {
                    return (value && 
                            (characters.replace("-", ' ').includes(value) ||
                            (characters.charAt(0).toUpperCase() + characters.slice(1).replace("-", ' ')).includes(value) ||
                            (characters.toLowerCase().includes(value) ||
                            characters.toUpperCase().includes(value)))
                           )
                });
                console.log(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <form className="searchBarContainer">
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    className="searchBarElement"
                />
                <div className="searchBtn fa fa-search">
                </div>
            </form>
        </>
    )
}

export default Search