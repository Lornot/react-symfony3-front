import React, { Component } from 'react';
import {fetchBlogPosts, deleteBlogPost} from '../../actions/blogPostActions';
import Table from '../../components/Table';
import { Link } from 'react-router';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        };
    };

    onDelete(id) {
        deleteBlogPost(id)
            .then((data) => {
                let blogPosts = this.state.blogPosts.filter((post) => {
                    return id !== post.id;
                });
                this.setState(state => {
                    state.blogPosts = blogPosts;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            })

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
                <Table blogPosts={this.state.blogPosts}
                       onDelete={this.onDelete.bind(this)}
                />
                <Link to="/posts/create" className="btn btn-lg btn-success" >Create</Link>
            </div>
        );
    }
}