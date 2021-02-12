import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import cvData from '../../resume';
import cvDataExt from '../../resume_extender';

export default class Additional extends Component {
    render() {
        const additional = `${cvData['basics']['summary']}. ${cvDataExt['additional']}`;
        return (
            <figure>
                <div className='row'>
                    <div className='col nfo-group'>Additional</div>
                </div>
                <div className='row'>
                    <div className='col col-sm-9 offset-sm-3 col-xl-10 offset-xl-2'>
                        <ReactMarkdown source={additional}/>
                    </div>
                </div>
            </figure>
        )
    }
}