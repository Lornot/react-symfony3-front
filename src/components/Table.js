import React, { Component } from 'react';
import {fetchBlogPosts} from '../actions/blogPostActions';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        };
    };

    componentDidMount() {
        fetchBlogPosts()
            .then((data) => {
                this.setState(state => {
                    state.blogPosts = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    };

    render() {
        return (
            <div>
                <table className="table table-hover table-responsive">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.blogPosts && this.props.blogPosts.map((post) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>
                                    <a href="" className="btn btn-default btn-sm">Edit</a>
                                    <a href="" className="btn btn-danger btn-sm">Delete</a>
                                </td>
                            </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}