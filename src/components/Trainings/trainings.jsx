import React, { Component } from 'react';
import TrainingItem from '../TrainingItem/training_item';


export default class Trainings extends Component {
    render() {
        if (!this.props.dataSource.isFilled) {
            return null;
        }

        return (
            <figure>
                <div className='row'>
                    <div className='col nfo-group'>Trainings</div>
                </div>
                {
                    this.props.dataSource.trainings.map(
                        (trn, idx) => <TrainingItem key={idx} trn={trn}/>
                    )
                }
            </figure>
        )
    }
}
