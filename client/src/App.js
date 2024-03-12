import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  
  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=25cbda97"

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return ( 
    <div className='container-fluid movie-app'>
      <div className='d-flex flex-nowrap'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;