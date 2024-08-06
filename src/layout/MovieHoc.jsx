import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbarComponent';

const MovieHoc = (Component) => 
({...props}) =>
  {
  return (
    <div>
      <MovieNavbar />
      <Component {...props}/>
      
    </div>
  )
}

export default MovieHoc;