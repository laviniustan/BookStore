import React from 'react';
import './search-bar.css'
import {FiSearch} from 'react-icons/fi'

const Search = () => {
    return (
        <div className="search-bar">
            <FiSearch/>
            <input className="search-bar__input" type="text" placeholder="Search Book"/>
        </div>
    )
}
export default Search