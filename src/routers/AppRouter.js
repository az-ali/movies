import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/App';
import MovieDetail from '../containers/MovieDetail';
import Header from '../components/Header';

const AppRouter = () => {
    return(
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" component={App} exact={true}></Route>
                    <Route path="/movie-detail/:id" component={MovieDetail}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;