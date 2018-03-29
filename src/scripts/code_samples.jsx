import React from 'react';
import cvData from './cv_data';


class CodeSample extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">
                    <a target="blank" href={this.props.sample['url']}>{this.props.sample['name']}</a>
                </div>
            </div>
        )
    }
}

class CodeSamples extends React.Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col nfo-group">Code samples</div>
                </div>

                {
                    cvData['code_samples'].map(
                        (sample, idx) => <CodeSample key={idx} sample={sample}/>
                    )
                }
            </figure>
        )
    }
}

export default CodeSamples;