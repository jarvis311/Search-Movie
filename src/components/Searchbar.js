import React, { useContext } from 'react'
import { AppContext } from '../context';
import '../styles/searchbar.css'
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  const { query, setQuery, isError } = useContext(AppContext);

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <div className="wrap">
        <div className="search">
          <input 
          type="text" className="searchTerm" 
          placeholder="What are you looking for?"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
          />
            <button type="submit" className="searchButton">
              <SearchIcon/>
            </button>
        </div>
        <div className="show-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </div>

    </form>
  )
}

export default Searchbar    