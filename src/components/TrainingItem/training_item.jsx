import React, { Component } from 'react';
import { getDateBetweenStr, DBY } from '../../utils';


export default class TrainingItem extends Component {
    render() {
        const date = getDateBetweenStr(this.props.trn['startDate'], this.props.trn['endDate'], DBY);

        return (
            <div className='row'>
                <div className='col-12 date'>{date}</div>
                <div className='col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2'>
                    <a target='_blank' href={this.props.trn['url']}>
                        {this.props.trn['name']}
                    </a>
                </div>
                <div className='col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2'>{this.props.trn['target']}</div>
            </div>
        )
    }
}
