import React from 'react';
import "./Search.scss";
import { LABELS } from '../../constants';

const Search = ({handleSearch, value}) => {
  return (
    <form className='search-section'>
        <label htmlFor="search">{LABELS.search}</label>
        <input 
          type="text" 
          value={value} 
          id="search"
          onChange={(e)=>handleSearch(e.target.value)}
          placeholder={LABELS.searchPlaceholder}
        />
    </form>
  )
}

export default Search