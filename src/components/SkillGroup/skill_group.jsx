import React, { Component } from "react";
import cvData from "../../cv_data";

export default class SkillGroup extends Component {

    getSkills() {
        return cvData['skills'][this.props.skill_group];
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">
                    <span className="skill-group">{this.props.skill_group}</span>
                    {
                        this.getSkills().join(', ')
                    }
                </div>
            </div>
        )
    }
}