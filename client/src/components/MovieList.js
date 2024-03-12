import React from 'react';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movies, index) => 
      <div className='image-container d-flex justify-content-start m-3'>
        <img src={movies.Poster} alt='movie'></img>
        <div className='overlay d-flex align-items-center justify-content'>
          <FavouriteComponent/>
        </div>
      </div>)}
    </>
  );
};

export default MovieList;
