import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return(
    <div>
        <input className ='tc i f4 pa2 ba b--green bg-lightest-blue'
        type= 'search'
        placeholder='Search Bots...'
        onChange={searchChange}
        />
    </div>
    );
}

export default SearchBox;