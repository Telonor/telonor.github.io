import React from 'react';
import ReactMarkdown from "react-markdown";

import cvData from './cv_data';

class ExperienceItem extends React.Component {
    render() {
        return (
            <div className="row exp-block">
                <div className="col-12 col-sm-9 col-lg-6 col-xl-6 date">{this.props.exp['date']}</div>
                <div className="col-12 col-sm-3 col-lg-3 offset-lg-3 col-xl-4 offset-xl-2 company-name">{this.props.exp['name']}</div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2 position">{this.props.exp['position']}</div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2 description">
                    <ReactMarkdown source={this.props.exp['description']}/>
                </div>
            </div>
        )
    }
}

class Experience extends React.Component {
    render() {
        return (
            <figure id="experience">
                <div className="row">
                    <div className="col-12 nfo-group">Experience</div>
                </div>

                {
                    cvData['experience'].map(
                        (exp, idx) => <ExperienceItem key={idx} exp={exp}/>
                    )
                }
            </figure>
        )
    }
}

export default Experience;