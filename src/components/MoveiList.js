import React, { useContext } from 'react'
import { AppContext } from '../context'
import '../styles/movieList.css'
import { Link } from 'react-router-dom'
import { Box, LinearProgress } from '@mui/material'
const MoveiList = () => {

  const { listOfMovie, loader } = useContext(AppContext);

  if (loader) {
    return (
      <div className="loader_movei">
        <Box sx={{ width: '60%'}}>
          <LinearProgress  color="secondary"  />
        </Box>
      </div>

    )
  }
  const renderMovieList = listOfMovie.map(movie => (

    <div key={movie.imdbID} class="movielist">
      <div className="content">
        <Link to={`/movie/${movie.imdbID}`}> <h1 className='title'>{movie.Title.length > 15 ? `${(movie.Title.substring(0,20))}..` : movie.Title }</h1> </Link>
        <img src={movie.Poster} alt={movie.Title}/>
      </div>
    </div>

  ))
  return (
    <div className='main'>
      {renderMovieList}
    </div>
  )
}

export default MoveiList