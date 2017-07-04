import React, { Component } from 'react';
import Form from '../../components/Form';
import { createBlogPost } from '../../actions/blogPostActions';

export default class Create extends Component {

    handleSubmit(data) {
        createBlogPost(data);
        console.log('form submission data', data);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} title="cgadfg" body="asdf"></Form>
            </div>
        );
    }




}