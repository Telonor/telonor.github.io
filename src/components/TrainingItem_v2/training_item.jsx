import React, { Component } from 'react';

export default class TrainingItem extends Component {
    render() {
        const startDate = new Date(this.props.trn['dateStart']);
        const endDate = this.props.trn['dateEnd'] ? new Date(this.props.trn['dateEnd']) : null;
        const endDateStr = endDate ? endDate.getFullYear() : 'present';

        return (
            <div className='row'>
                <div className='col-12 date'>{`${startDate.getFullYear()} - ${endDateStr}`}</div>
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