import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Movie_API_URI } from '../context';
import '../styles/fetchsinglemovie.css'
import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';


const FetchSingleMovie = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(true)
  const [movie, setMovie] = useState("")

  const getSingleMovieList = async () => {
    try {
      const response = await fetch(`${Movie_API_URI}&i=${id}`)
      const jsonData = await response.json()
      console.log(jsonData);
      if (jsonData.Response === 'True') {
        setMovie(jsonData)
        setLoader(false)
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      getSingleMovieList();
    }, 1000);

    return () => clearTimeout(timer)
  }, [id])

  if (loader) {
    return (
      <div className="loader_movei">
        <Box sx={{ width: '60%'}}>
          <LinearProgress  color="secondary"  />
        </Box>
      </div>

    )
  }

  return (

    <div key={movie.imdbID} className="fetchsingle_movie">
      <div className="content-single">
        <div className="img">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className='movie_info'>
          <h3 className='movie_title'>
            {movie.Title}
          </h3>
          <h4 className='other_info'><span>Country  </span> : {movie.Country}</h4>
          <h4 className='other_info'><span>Released Date </span>  : {movie.Released}</h4>
          <h4 className='other_info'><span>Actors</span> : {movie.Country}</h4>
          <h4 className='other_info'><span>Country</span> : {movie.Country}</h4>
          <h4 className='other_info'><span>IMDB-Rating </span>  : {movie.imdbRating}</h4>
          <h4 className='other_info'><span>IMDB-Vote</span>: {movie.imdbVotes}</h4>
          <h4 className='other_info'><span>Run Time</span> : {movie.Runtime}</h4>
          <h4 className='other_info'><span>Language</span>  : {movie.Language}</h4>


        </div>
      </div>
    </div>

  )
}

export default FetchSingleMovie