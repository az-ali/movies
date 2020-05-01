import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import About from '../components/About';
import MovieDetail from '../components/MovieDetail';
import Header from '../components/Header';

const AppRouter = () => {
    return(
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" component={App} exact={true}></Route>
                    <Route path="/movie-detail/:id" component={MovieDetail}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;