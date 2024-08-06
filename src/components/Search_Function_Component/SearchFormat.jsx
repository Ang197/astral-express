function SearchFormat(query){
    const formatSearchQuery = (query) => {
        let formattedQuery = query.replace(/ /g, '-');
        formattedQuery = formattedQuery.replace(/'/g, '-');

        return formattedQuery
    }

    return(
        formatSearchQuery(query)
    )
}

export default SearchFormat