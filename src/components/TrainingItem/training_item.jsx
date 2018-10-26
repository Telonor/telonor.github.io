import React, { Component } from "react";

export default class TrainingItem extends Component {
    render() {
        // @TODO fix. It's possible to have training item without link or just use markup
        return (
            <div className="row">
                <div className="col-12 date">{this.props.trn['date']}</div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">
                    <a target="_blank" href={this.props.trn['url']}>
                        {this.props.trn['name']}
                    </a>
                </div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">{this.props.trn['target']}</div>
            </div>
        )
    }
}