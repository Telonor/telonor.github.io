import React, { Component } from "react";
import cvData from "../../cv_data";
import TrainingItem from "../TrainingItem/training_item";

class Trainings extends Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col nfo-group">Trainings</div>
                </div>
                {
                    cvData['trainings'].map(
                        (trn, idx) => <TrainingItem key={idx} trn={trn}/>
                    )
                }
            </figure>
        )
    }
}

export default Trainings;