import React, { Component } from 'react';
import { getAge } from '../../utils';


export default class MainInfo extends Component {
    render() {
        if (!this.props.dataSource.isFilled) {
            return null;
        }

        const basicInfo = this.props.dataSource.basics;
        return (
            <figure>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>Age</span>
                        {getAge(basicInfo['bday'])}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>City</span>
                        {basicInfo['location']['city']}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>Family status</span>
                        {basicInfo['family_status']}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>E-mail</span>
                        {basicInfo['email']}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>Skype</span>
                        {basicInfo['skype']}
                    </div>
                </div>
            </figure>
        )
    }
}
