import React, { Component } from 'react';

export default class Create extends Component {

    handleSubmit(data) {
        console.log('form submission data', data);
    }

    render() {
        return (
            <div>
                <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div id="blog_post">
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       id="blog_post_title"
                                       required="required"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Body</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       id="blog_post_body"
                                       required="required"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button type="submit"
                                        id="blog_post_submit"
                                        className="btn-default btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }




}