<<<<<<< HEAD
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from "../components/MovieShow";
=======
// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

>>>>>>> 951ca9370aa0a5634fa6dd7f703351c076469898
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
  </div>
<<<<<<< HEAD
)
=======
)

export default MoviesPage
>>>>>>> 951ca9370aa0a5634fa6dd7f703351c076469898
