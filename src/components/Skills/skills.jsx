import React, { Component } from "react";
import cvData from "../../cv_data";
import SkillGroup from "../SkillGroup/skill_group";

export default class Skills extends Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col-12 col-sm-3 nfo-group">Skills</div>
                </div>

                {
                    Object.keys(cvData['skills']).map(
                        (key, idx) => <SkillGroup key={idx} skill_group={key}/>
                    )
                }
            </figure>
        );
    }
}
