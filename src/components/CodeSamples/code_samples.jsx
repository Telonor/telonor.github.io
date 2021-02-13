import React, {Component} from 'react';
import CodeSample from '../CodeSample/code_sample';


export default class CodeSamples extends Component {
    render() {
        return (
            <figure>
                <div className='row'>
                    <div className='col nfo-group'>Code samples</div>
                </div>

                {
                    this.props.dataSource.codeSamples.map(
                        (sample, idx) => <CodeSample key={idx} sample={sample}/>
                    )
                }
            </figure>
        )
    }
}
