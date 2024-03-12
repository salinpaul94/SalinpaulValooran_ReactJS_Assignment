import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
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
      <div className='row d-flex align-items-center mt-4 mb-4 fixed-top'>
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='d-flex flex-nowrap'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;