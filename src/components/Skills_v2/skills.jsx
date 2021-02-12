import React, { Component } from 'react';
import cvData from '../../resume';
import SkillGroup from '../SkillGroup_v2/skill_group';

export default class Skills extends Component {
    render() {
        const skills = cvData['skills'];

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
