import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        }
    }

    componentDidMount(){
        fetch('http://sa/web/app_dev.php/cget', {
            method: 'GET',
            mode:   'CORS'
        }).then(res => res.json())
            .then(data => {
                console.log('json data', data);
                this.setState({
                  blogPosts: data
                });
                console.log(this.state.blogPosts);
            }).catch(err => err);
      }

    render() {
        return (
            <div>
              <h1>Hello, World!</h1>

              <table className="table table-hover table-responsive">
                <thead>
                <tr>
                  <th>id</th>
                  <th>Title</th>
                  <th>Options</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.blogPosts && this.state.blogPosts.map(post => {
                    return (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>
                                <a href="#" className="btn btn-default btn-sm">Edit</a>
                                <a href="#" className="btn btn-danger btn-sm">Delete</a>
                            </td>
                        </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
        );
      }
}
