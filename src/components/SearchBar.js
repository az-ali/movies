import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '', year: '', type:''}

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({ term });
    }

    onYearChange = (event) => {
        const year = event.target.value;
        this.setState({ year });
    }

    onTypeChange = (event) => {
        const type = event.target.value;
        this.setState({ type });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitSearch(this.state.term, this.state.year, this.state.type);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="ui fluid action input">
                        <input
                            type="text"
                            placeholder="Search movies"
                            value={this.state.term} 
                            onChange={this.onSearchChange}
                            required="required"
                        />
                        <input 
                            type="text"
                            placeholder="Year"
                            value={this.state.year}
                            onChange={this.onYearChange}
                        />
                        <select
                            onChange={this.onTypeChange}
                        >
                            <option value="">Select Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="episode">Episode</option>
                        </select>
                        <button className="ui button">Search</button>
                    </div>
                </form>                
            </div>
        );
    }
}

export default SearchBar;