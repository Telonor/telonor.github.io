import React, { Component } from 'react';


export default class CodeSample extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col col-sm-9 offset-sm-3 col-xl-10 offset-xl-2'>
                    <a target='blank' href={this.props.sample['url']}>{this.props.sample['name']}</a>
                </div>
            </div>
        )
    }
}
