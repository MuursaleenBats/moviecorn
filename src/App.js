import React from 'react'
import './App.css'
import { useEffect } from 'react'
import SearchIcon from './search.svg'

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
            <div className='movie'>
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img src={movie1.Poster!== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt="movie 1" />
                </div>

                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App;