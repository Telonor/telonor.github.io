import React from 'react';
import cvData from './cv_data';


class LanguageSkill extends React.Component {
    render() {
        return (
           <div className="row">
                <div className="col-12 col-sm-9 offset-sm-3">
                    {this.props.lang}
                </div>
            </div>
        )
    }
}

class Languages extends React.Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col-12 col-sm-3 nfo-group">Language skills</div>
                </div>

                {
                    cvData['languages'].map(
                        (lang, idx) => <LanguageSkill key={idx} lang={lang}/>
                    )
                }
            </figure>
        )
    }
}

export default Languages;