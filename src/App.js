import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRedirect, withRouter } from 'react-router'
import List from './containers/blogPosts/list';
import Create from './containers/blogPosts/create';
import NotFoundPage from './components/NotFoundPage';

export default class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" >
                    <IndexRedirect to="/posts"/>
                </Route>
                <Route path="/posts" component={List} />
                <Route path="/posts/create" component={Create} />
                <Route path="*" component={NotFoundPage} />
            </Router>
        );
      }
}
