import React, { Component } from 'react';
import Language from '../Language/language';


export default class Languages extends Component {
    render() {
        if (!this.props.dataSource.isFilled) {
            return null;
        }

        return (
            <figure>
                <div className='row'>
                    <div className='col-12 col-sm-3 nfo-group'>Language skills</div>
                </div>

                {
                    this.props.dataSource.languages.map(
                        (langData, idx) => <Language key={idx} lang={langData['language']} fluency={langData['fluency']}/>
                    )
                }
            </figure>
        )
    }
}
