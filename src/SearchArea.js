import React from 'react';



const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" placeholder="look for a book"/>
                <button type="submit">Search</button>
            </form>

        </div>
    )
}

export default SearchArea;