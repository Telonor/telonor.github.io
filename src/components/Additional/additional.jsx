import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';


export default class Additional extends Component {
    render() {
        if (!this.props.dataSource.isFilled) {
            return null;
        }

        const basicInfo = this.props.dataSource.basics;
        return (
            <figure>
                <div className='row'>
                    <div className='col nfo-group'>Additional</div>
                </div>
                <div className='row'>
                    <div className='col col-sm-9 offset-sm-3 col-xl-10 offset-xl-2'>
                        <ReactMarkdown source={basicInfo['summary']}/>
                    </div>
                </div>
            </figure>
        )
    }
}