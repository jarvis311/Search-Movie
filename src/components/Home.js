import React, { useContext } from 'react'
import MoveiList from './MoveiList'
import Searchbar from './Searchbar'


const Home = () => {

  return (
    <div>
      <Searchbar/>
      <MoveiList/>
    </div>


  )
}

export default Home 