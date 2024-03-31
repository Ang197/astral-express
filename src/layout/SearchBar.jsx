import '../style/searchbar.css'
import { useState } from 'react'

/**
 * Used to search for anything, including information found
 * on other pages such as characters in the characters page,
 * or light cones in the light cones page
 */

function SearchBar({onSearch}) {
    const [input, setInput] = useState("")
    

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(input)
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <form onSubmit={handleSubmit} className="searchBarContainer">
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={handleInputChange}
                    className="searchBarElement"
                />
            </form>
        </>
    )
}

export default SearchBar