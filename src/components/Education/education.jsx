import React, { Component } from 'react';
import EducationItem from '../EducationItem/education_item';


export default class Education extends Component {
    render() {
        if (!this.props.dataSource.isFilled) {
            return null;
        }

        return (
            <figure>
                <div className='row'>
                    <div className='col-12 nfo-group'>Education</div>
                </div>

                {
                    this.props.dataSource.education.map(
                        (ed, idx) => <EducationItem key={idx} ed={ed}/>
                    )
                }
            </figure>
        )
    }
}
