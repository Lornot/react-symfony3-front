import React, { Component } from 'react';
import Form from '../../components/Form';
import { withRouter } from 'react-router'
import { createBlogPost } from '../../actions/blogPostActions';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(data) {
        createBlogPost(data)
        .then(res => {
            this.props.router.push("/").bind(this);
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} title="cgadfg" body="asdf"></Form>
            </div>
        );
    }

}