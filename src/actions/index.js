import omDbApi from '../api/omDbApi';

export const fetchMovies = (term, year='', type='') => {
    return async (dispatch) => {
        const response = await omDbApi.get('http://omdbapi.com/', {
            params: { 
                s: term,
                y: year,
                type: type,
                apikey: 'f9ac08bc'
            }
        });
        let payload = [];
        if(response.data.Search) {
            payload = response.data.Search;
        }else {
            payload.push({errorMessage: 'No any movie found agains this search'});
        }
        dispatch({ type: 'FETCH_MOVIES', payload });
    };
};

export const fetchMovieDetail = (imdbID) => {
    return async (dispatch) => {
        const response = await omDbApi.get('http://omdbapi.com/', {
            params: { 
                i: imdbID,
                apikey: 'f9ac08bc'
            }
        });
        let payload = {};
        if(response.data.Title) {
            payload = response.data;
        }else {
            payload.errorMessage = 'No detail found';
        }
        dispatch({ type: 'FETCH_MOVIE_DETAIL', payload });
    };
};

