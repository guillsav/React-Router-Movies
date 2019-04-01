import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SavedMovies from './SavedMovies';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <SavedMovies key={movie.id} title={movie.title} />
        ))}
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    );
  }
}
