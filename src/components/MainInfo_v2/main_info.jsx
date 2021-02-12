import React, { Component } from 'react';
import cvData from '../../resume';
import cvDataExt from '../../resume_extender';
import { getAge } from '../../utils';

export default class MainInfo extends Component {
    render() {
        return (
            <figure>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>Age</span>
                        {getAge(cvDataExt['basics']['bday'])}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>City</span>
                        {cvData['basics']['location']['city']}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>Family status</span>
                        {cvDataExt['basics']['familyStatus']}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>E-mail</span>
                        {cvData['basics']['email']}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span className='nfo-group'>Skype</span>
                        {cvDataExt['basics']['skype']}
                    </div>
                </div>
            </figure>
        )
    }
}
