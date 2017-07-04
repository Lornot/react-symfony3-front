import React, { Component } from 'react';
import Form from '../../components/Form';
import { createBlogPost } from '../../actions/blogPostActions';

export default class Create extends Component {

    constructor(props) {
        super(props);

        console.log(props.route);

    };

    handleSubmit(data) {


        createBlogPost(data)
        .then(res => {
            this.props.route.push("/").bind(this);
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