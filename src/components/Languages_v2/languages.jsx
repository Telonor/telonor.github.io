import React, { Component } from 'react';
import cvData from '../../resume';
import Language from '../Language_v2/language';

class Languages extends Component {
    render() {
        return (
            <figure>
                <div className='row'>
                    <div className='col-12 col-sm-3 nfo-group'>Language skills</div>
                </div>

                {
                    cvData['languages'].map(
                        (langData, idx) => <Language key={idx} lang={langData['language']} fluency={langData['fluency']}/>
                    )
                }
            </figure>
        )
    }
}

export default Languages;
