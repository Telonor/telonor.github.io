import React, {Component} from 'react';
import cvDataExt from '../../resume_extender';
import CodeSample from '../CodeSample_v2/code_sample';

class CodeSamples extends Component {
    render() {
        return (
            <figure>
                <div className='row'>
                    <div className='col nfo-group'>Code samples</div>
                </div>

                {
                    cvDataExt['code_samples'].map(
                        (sample, idx) => <CodeSample key={idx} sample={sample}/>
                    )
                }
            </figure>
        )
    }
}

export default CodeSamples;