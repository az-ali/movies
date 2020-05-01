import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MoviesList extends Component {
    
    renderList() {
        if(this.props.movies.length > 0){
            if(this.props.movies[0].errorMessage){
                return <div><h3>No any Movie Found!</h3></div>;
            }
        }
        return this.props.movies.map((movie) => {
            return (
                <div className="item" key={movie.imdbID}>
                    <i className="large middle aligned icon user"/>
                    <Link to={`/movie-detail/${movie.imdbID}`}>
                    <div className="content">
                        <div className="description">
                            <h2>{movie.Title}</h2>
                            <p>Year: {movie.Year}</p>
                            <p>Type: {movie.Type}</p>
                        </div>
                    </div>
                    </Link>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

export default MoviesList;