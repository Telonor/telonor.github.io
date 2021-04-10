import React, { Component } from 'react';
import ExperienceItem from '../ExperienceItem/experience_item';

import './experience.css';


export default class Experience extends Component {
    render() {
        if (!this.props.dataSource.isFilled) {
            return null;
        }

        return (
            <figure className='experience-block'>
                <div className='row'>
                    <div className='col-12 nfo-group'>Experience</div>
                </div>

                {
                    this.props.dataSource.experience.map(
                        (exp, idx) => <ExperienceItem key={idx} exp={exp}/>
                    )
                }
            </figure>
        )
    }
}
