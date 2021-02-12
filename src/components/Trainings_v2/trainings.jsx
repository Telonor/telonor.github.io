import React, { Component } from 'react';
import cvDataExt from '../../resume_extender';
import TrainingItem from '../TrainingItem_v2/training_item';

class Trainings extends Component {
    render() {
        return (
            <figure>
                <div className='row'>
                    <div className='col nfo-group'>Trainings</div>
                </div>
                {
                    cvDataExt['trainings'].map(
                        (trn, idx) => <TrainingItem key={idx} trn={trn}/>
                    )
                }
            </figure>
        )
    }
}

export default Trainings;