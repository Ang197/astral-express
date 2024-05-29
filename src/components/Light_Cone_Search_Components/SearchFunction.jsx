import {useState} from 'react';
import SearchBar from '../../layout/SearchBar'
import SearchResults from './SearchResults'
import SearchFormat from "../searchFormat"

function SearchFunction() {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        try{
            let formattedQuery = SearchFormat(query)
            const response = await fetch(`https://genshin.jmp.blue/weapons/${formattedQuery}`)
            const data = await response.json();
            console.log('Response: ', data);
            if(!data || !data.name) {
                throw new Error('Invalid response data');
            }
            const dataArray = Array.isArray(data) ? data : [data];
            setResults(dataArray);
        } catch (error) {
            console.error('Error fetching data: ', error)
        }
    };

    return(
        <>
            <SearchBar onSearch={handleSearch}/>
            <SearchResults results={results}/>
        </>
    )
}

export default SearchFunction;