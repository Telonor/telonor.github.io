import React, { Component } from 'react';


export default class MainHeader extends Component {
    render() {
        const basicInfo = this.props.dataSource.basics
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
