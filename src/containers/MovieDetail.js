import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovieDetail } from '../actions';

class MovieDetail extends Component{

  componentDidMount() {
        this.props.fetchMovieDetail(this.props.match.params.id);
  }  

  render(){
    const { movie } = this.props;
    if(movie.errorMessage){
      return <div>{movie.errorMessage}</div>;
    }
    const imgSrc = movie.Poster ? movie.Poster : 'https://via.placeholder.com/250';
    return (
        <div className="ui container grid">
            <div className="six wide column">
                <p>Released: {movie.Released}</p>
                <p>Rated: {movie.Rated}</p>
                <p>Runtime: {movie.Runtime}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Plot: {movie.Plot}</p>
            </div>
            <div className="ten wide column">
                <img className="ui centered medium image" src={imgSrc} />
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail
    };
};

export default connect(mapStateToProps, { fetchMovieDetail })(MovieDetail);