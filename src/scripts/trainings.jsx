import React from 'react';
import cvData from './cv_data';

class Training extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 date">{this.props.trn['date']}</div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">
                    <a target="_blank" href={this.props.trn['url']}>
                        {this.props.trn['name']}
                    </a>
                </div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">{this.props.trn['target']}</div>
            </div>
        )
    }
}

class Trainings extends React.Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col nfo-group">Trainings</div>
                </div>
                {
                    cvData['trainings'].map(
                        (trn, idx) => <Training key={idx} trn={trn}/>
                    )
                }
            </figure>
        )
    }
}

export default Trainings;