import React from 'react'
import './App.css'
import { useEffect } from 'react'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = "http://www.omdbapi.com/?apikey=9c1368fb"
const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search);
    }
    
    useEffect(()=>{
        searchMovie('superman');
    },[]);
  return (
    <div className='app'>
        <h1>Moviecorn</h1>
        <div className='search'>
            <input placeholder='Search' value='Superman'/>
            <img src={SearchIcon} alt="search" onClick={() => {}} />
        </div>
        <div className='container'>
            <MovieCard movie1={movie1}/>
        </div>
    </div>
  )
}

export default App;