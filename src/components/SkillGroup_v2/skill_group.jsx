import React, { Component } from 'react';

import './skill_group.css';

export default class SkillGroup extends Component {

    render() {
        console.log(this.props.skill_group);
        return (
            <div className="row">
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">
                    <span className="skill-group">{this.props.skill_group['name']}</span>
                    {this.props.skill_group['keywords'].join(', ')}
                </div>
            </div>
        )
    }
}