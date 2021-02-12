import React, { Component } from 'react';
import cvData from '../../resume';
import ExperienceItem from '../ExperienceItem_v2/experience_item';

import './experience.css';

class Experience extends Component {
    render() {
        return (
            <figure className='experience-block'>
                <div className='row'>
                    <div className='col-12 nfo-group'>Experience</div>
                </div>

                {
                    cvData['work'].map(
                        (exp, idx) => <ExperienceItem key={idx} exp={exp}/>
                    )
                }
            </figure>
        )
    }
}

export default Experience;