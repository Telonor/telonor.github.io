import React from 'react';
import cvData from './cv_data';

class EducationItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 date">{this.props.ed['date']}</div>
                <div className="col-12 col-sm-9 offset-sm-3">{this.props.ed['name']}</div>
            </div>
        )
    }
}

class Education extends React.Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col-12 nfo-group">Education</div>
                </div>

                {
                    cvData['education'].map(
                        (ed, idx) => <EducationItem key={idx} ed={ed}/>
                    )
                }
            </figure>
        )
    }
}

export default Education;