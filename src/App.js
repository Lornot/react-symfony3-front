import React, { Component } from 'react';
import List from './containers/blogPosts/list';

export default class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <List></List>
            </div>
        );
      }
}
