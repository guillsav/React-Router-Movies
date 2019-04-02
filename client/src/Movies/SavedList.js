import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import SavedMovies from './SavedMovies';

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}>
            <SavedMovies key={movie.id} title={movie.title} />
          </NavLink>
        ))}
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    );
  }
}
