import React from 'react';
import cvData from './cv_data';


class SkillGroup extends React.Component {

    getSkills() {
        return cvData['skills'][this.props.skill_group];
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-9 offset-sm-3">
                    <span className="skill-group">{this.props.skill_group}</span>
                    {
                        this.getSkills().join(', ')
                    }
                </div>
            </div>
        )
    }
}

class Skills extends React.Component {
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

export default Skills;