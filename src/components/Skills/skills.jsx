import React, { Component } from 'react';
import SkillGroup from '../SkillGroup/skill_group';


export default class Skills extends Component {
    render() {
        if (!this.props.dataSource.isFilled) {
            return null;
        }

        const skills = this.props.dataSource.skills;
        return (
            <figure>
                <div className='row'>
                    <div className='col-12 col-sm-3 nfo-group'>Skills</div>
                </div>

                {
                    skills.map(
                        (key, idx) => <SkillGroup key={idx} skill_group={key}/>
                    )
                }
            </figure>
        );
    }
}
