import React, { Component } from "react";

export default class Language extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">{this.props.lang}</div>
            </div>
        )
    }
}