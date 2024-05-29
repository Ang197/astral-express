import {useState} from 'react';
import SearchBar from '../../layout/SearchBar'
import SearchResults from './SearchResults'
import SearchFormat from '../SearchFormat'

function SearchFunction() {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSearch = async (query) => {
        try{
            setErrorMessage('') //Resets the error message and gets rid of it on screen
            let formattedQuery = SearchFormat(query) //Replaces spaces and apostrophes to be a valid search
            const response = await fetch(`https://genshin.jmp.blue/characters/${formattedQuery}`)

            const data = await response.json();

            if(!data || !data.name) {
                throw new Error('Invalid response data');
            }

            const dataArray = Array.isArray(data) ? data : [data]; //Checks to see if data is an array, or assigns a new array for data
            setResults(dataArray);

        } catch (error) {
            console.error('Error fetching data: ', error)
            setErrorMessage('Invalid result. Please enter a valid character name')
            setResults([])
        }
    };

    return(
        <>
            <SearchBar onSearch={handleSearch}/>
            {errorMessage && <p>{errorMessage}</p>}
            <SearchResults results={results}/>
        </>
    )
}

export default SearchFunction;