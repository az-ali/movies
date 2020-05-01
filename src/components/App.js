import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions/index';
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';

class App extends Component {

    onSubmitSearch = (term, year, type) => {
        this.props.fetchMovies(term, year, type);
    }

    render() {
        return (
            <div>
                <div className="ui container">
                    <SearchBar onSubmitSearch={this.onSubmitSearch} />
                    <MoviesList movies={this.props.movies} />
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps, { fetchMovies })(App);