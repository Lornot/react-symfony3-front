import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Table extends Component {

    constructor(props) {
        super(props);
    };

    deleteHandler(id, e) {
        console.log(id);
        e.preventDefault();
        this.props.onDelete(id)
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

                    {this.props.blogPosts && this.props.blogPosts.map(post => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>
                                    <Link to={`/posts/update/${post.id}`} className="btn btn-default btn-sm">Edit</Link>
                                    <btn onClick={this.deleteHandler.bind(this, post.id)} className="btn btn-danger btn-sm">Delete</btn>
                                </td>
                            </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}