import React, { Component } from 'react';
import cvData from '../../resume';

const basicInfo = cvData['basics']


export default class MainHeader extends Component {
    render() {
        return (
            <figure>
                <div className='row'>
                    <div className='col text-center'>
                        {basicInfo['name']}
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        {basicInfo['label']}
                    </div>
                </div>
            </figure>
        )
    }
}
