import React, { Component } from "react";

export default class EducationItem extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 date">{this.props.ed['date']}</div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">{this.props.ed['name']}</div>
            </div>
        )
    }
}